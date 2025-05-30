import ChatBase from "@/components/chat/ChatBase";
import { fetchChatMessages } from "@/fetch/chatsFetch";
import { fetchChatGroup, fetchChatGroupUsers } from "@/fetch/groupFetch";
import { ChatGroupType, GroupChatUserType, MessageType } from "@/types/types";
import { notFound } from "next/navigation";

import React from "react";

export default async function chat({ params }: { params: { id: string } }) {
  const groupId = params.id;
  if (groupId.length !== 36) {
    return notFound();
  }
  const group: ChatGroupType | null = await fetchChatGroup(groupId);
  if (group === null) {
    return notFound();
  }
  const users: Array<GroupChatUserType> | [] = await fetchChatGroupUsers(
    params.id
  );
  const oldMessages: Array<MessageType> | [] = await fetchChatMessages(
    params.id
  );
  return (
    <div>
      <ChatBase users={users} group={group} oldMessages={oldMessages} />
    </div>
  );
}
