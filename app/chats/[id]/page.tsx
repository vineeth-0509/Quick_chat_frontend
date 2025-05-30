import ChatBase from "@/components/chat/ChatBase";
import { fetchChatMessages } from "@/fetch/chatsFetch";
import { fetchChatGroup, fetchChatGroupUsers } from "@/fetch/groupFetch";
import { ChatGroupType, GroupChatUserType, MessageType } from "@/types/types";
import { notFound } from "next/navigation";

// import React from "react";
// interface PageProps{
//   params:{
//     id:string;
//   };
//   searchParams?:{
//     [key:string]: string | string[] | undefined
//   }
//}

import { Metadata } from "next";
type Props = {
  params:{id: string};
  
}
export default async function Page(props: any) {
  const { params } = props;
  if (params.id.length !== 36) {
    return notFound();
  }
  const group: ChatGroupType | null = await fetchChatGroup(params.id);
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
