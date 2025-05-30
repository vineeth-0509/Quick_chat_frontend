"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createChatSchema, createChatSchemaType } from "../groupChatValidation";

import { toast } from "sonner";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useTransition } from "react";
import axios, { AxiosError } from "axios";
import { CHAT_GROUP_URL } from "@/lib/apiEndPoints";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { User } from "lucide-react";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import { clearCache } from "@/action/common";
const CreateChatForm = ({
  user,
  setOpen,
}: {
  user: CustomUser;
  setOpen: (open: boolean) => void;
}) => {
  const form = useForm<createChatSchemaType>({
    resolver: zodResolver(createChatSchema),
    defaultValues: {
      title: "",
      passcode: "",
    },
  });
  const [isPending, startTransition] = useTransition();

  const onSubmit = async (values: createChatSchemaType) => {
    console.log("The paylaod of chat:", values);
    startTransition(async () => {
      try {
        const response = await axios.post(
          `${CHAT_GROUP_URL}`,
          { ...values, userId: user.id },
          {
            headers: {
              Authorization: user.token,
            },
          }
        );
        if (response?.data?.message) {
          clearCache("dashboard")
          setOpen(false);
          toast.success(response?.data?.message);
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          toast.error(error.message);
        } else {
          toast.error("Something went wrong,Please try again!");
        }
      }
    });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Title</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter Title" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="passcode"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Passcode</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter Passcode" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-4">
          <Button className="w-full" type="submit" disabled={isPending}>
            {isPending ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateChatForm;
