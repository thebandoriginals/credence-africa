
"use client";

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const insightSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  content: z.string().min(1, 'Content is required'),
  category: z.string().min(1, 'Category is required'),
  tags: z.string().optional(),
});

type InsightFormValues = z.infer<typeof insightSchema>;

export default function EditInsightPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useParams();
  const { toast } = useToast();
  const id = params.id as string;

  const form = useForm<InsightFormValues>({
    resolver: zodResolver(insightSchema),
    defaultValues: {
      title: '',
      content: '',
      category: '',
      tags: '',
    },
  });

  useEffect(() => {
    if (!id) return;
    const fetchInsight = async () => {
      const docRef = doc(db, 'insights', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        form.reset({
          title: data.title,
          content: data.content,
          category: data.category,
          tags: (data.tags || []).join(', '),
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Insight not found.',
        });
        router.push('/admin/insights');
      }
    };
    fetchInsight();
  }, [id, form, router, toast]);

  const onSubmit = async (data: InsightFormValues) => {
    setLoading(true);
    try {
      const docRef = doc(db, 'insights', id);
      await updateDoc(docRef, {
        title: data.title,
        content: data.content,
        category: data.category,
        tags: data.tags?.split(',').map(tag => tag.trim()).filter(tag => tag) || [],
        updatedAt: serverTimestamp(),
      });
      toast({
        title: 'Success',
        description: 'Insight updated successfully.',
      });
      router.push('/admin/insights');
    } catch (err: any) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Edit Insight</h1>
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
                  <Textarea
                    placeholder="Write your insight content here..."
                    className="min-h-[300px]"
                    {...field}
                  />
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
            {loading ? 'Updating...' : 'Update Insight'}
          </Button>
        </form>
      </Form>
    </div>
  );
}
