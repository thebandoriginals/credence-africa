
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '@/lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { useToast } from '@/hooks/use-toast';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const insightSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  content: z.string().min(1, 'Content is required'),
  category: z.string().min(1, 'Category is required'),
  tags: z.string().optional(),
});

type InsightFormValues = z.infer<typeof insightSchema>;

export default function NewInsightPage() {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<InsightFormValues>({
    resolver: zodResolver(insightSchema),
    defaultValues: {
      title: '',
      content: '',
      category: '',
      tags: '',
    },
  });

  const onSubmit = async (data: InsightFormValues) => {
    if (!user) {
      toast({
        variant: "destructive",
        title: "Authentication Error",
        description: "You must be logged in to create an insight.",
      });
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, 'insights'), {
        title: data.title,
        content: data.content,
        category: data.category,
        tags: data.tags?.split(',').map(tag => tag.trim()).filter(tag => tag) || [],
        author: user.displayName || user.email,
        authorId: user.uid,
        createdAt: serverTimestamp(),
        published: true,
      });
      toast({
        title: "Success",
        description: "Insight published successfully.",
      });
      router.push('/admin');
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Create New Insight</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Insight Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <div className="bg-white">
                    <ReactQuill
                      theme="snow"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Finance, Technology" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags (comma-separated)</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Africa, Investment, Policy" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={loading}>
            {loading ? 'Publishing...' : 'Publish Insight'}
          </Button>
        </form>
      </Form>
    </div>
  );
}
