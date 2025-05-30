"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import CreateChatForm from "../forms/CreateChatForm";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";

export default function CreateChat({ user }: { user: CustomUser }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Create Group</Button>
        </DialogTrigger>
        <DialogContent
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
        >
          <DialogHeader>
            <DialogTitle>Create Your new Chat</DialogTitle>
          </DialogHeader>
          <CreateChatForm setOpen={setOpen} user={user} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
