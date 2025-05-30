import DashboardNav from "@/components/dashboard/DashNav";
import React from "react";
import { authOptions, CustomSession } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import CreateChat from "@/components/chatGroup/CreateChat";
import { ChatGroupType } from "@/types/types";
import { fetchChatGroups } from "@/fetch/groupFetch";
import GroupChatCard from "@/components/chatGroup/GroupChatCard";

export default async function Dashboard() {
  try {
    const session: CustomSession | null = await getServerSession(authOptions);
    const groups: Array<ChatGroupType> | [] = await fetchChatGroups(
      session?.user?.token!
    );

    return (
      <div>
        <DashboardNav
          name={session?.user?.name!}
          image={session?.user?.image ?? undefined}
        />
        <div className="container mx-auto">
          <div className="flex juustify-end mt-10">
            <CreateChat user={session?.user!} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groups.length > 0 &&
              groups.map((item, index) => (
                <GroupChatCard group={item} key={index} user={session?.user!} />
              ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in Dashboard page:", error);
    return <p>Error loading Dashboard</p>;
  }
}
