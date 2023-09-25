"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { Separator } from "./ui/separator";

export const InitialPage = () => {
  const router = useRouter();

  let roomIdInput = "";

  const joinRoom = async (roomId: string) => {
    router.push(`/room/${roomId}`);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="bg-white text-black p-0 overflow-hidden w-3/4">
        <CardHeader>
          <CardTitle>Join a room</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-row">
          <Input
            className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 mr-4"
            placeholder="Enter room id"
            onChange={({ target }) => (roomIdInput = target.value)}
          />
          <Button
            variant="default"
            className="w-44"
            onClick={() => joinRoom(roomIdInput)}
          >
            Join Room
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default InitialPage;
