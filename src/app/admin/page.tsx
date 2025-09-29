
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { auth, db } from '@/lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { List } from "lucide-react";

export default function AdminDashboard() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [insightCount, setInsightCount] = useState(0);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/admin/login');
    } else if (user) {
      const fetchInsights = async () => {
        const querySnapshot = await getDocs(collection(db, "insights"));
        setInsightCount(querySnapshot.size);
      };
      fetchInsights();
    }
  }, [user, loading, router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return null;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Insights</CardTitle>
            <CardDescription>The total number of insights you have created.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{insightCount}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Manage Insights</CardTitle>
            <CardDescription>Create, edit, and delete insights.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Button asChild>
              <Link href="/admin/insights/new">Add New Insight</Link>
            </Button>
            <Button asChild variant="outline">
                <Link href="/admin/insights">
                    <List className="mr-2 h-4 w-4" />
                    View All Insights
                </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
