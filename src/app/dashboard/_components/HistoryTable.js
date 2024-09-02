"use client";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ReactMarkdown from "react-markdown";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { db } from "@/utils/db";
import _ from "lodash";

function HistoryTable() {
  const [isLoading, setIsLoading] = useState(true);

  const [historyData, setHistroyData] = useState([]);

  const { user } = useUser();

  const fetchOutputData = async () => {
    try {
      const result = await db
        .select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

      setHistroyData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOutputData();
  }, [user]);

  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead>Template</TableHead>
          <TableHead>Response</TableHead>
          <TableHead>Created Date</TableHead>
          <TableHead>Copy Response</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {_.map(historyData, (data) => {
          return (
            <TableRow>
              <TableCell>{data.templateSlug}</TableCell>
              <TableCell>
                <ReactMarkdown>
                  {_.truncate(data.aiResponse, {
                    length: 80,
                    omission: "***",
                  })}
                </ReactMarkdown>
              </TableCell>
              <TableCell>{data.createdAt}</TableCell>
              <TableCell>Copy</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default HistoryTable;
