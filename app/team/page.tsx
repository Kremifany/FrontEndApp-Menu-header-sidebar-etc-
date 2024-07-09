"use client";

import { useState } from "react";
// import dynamic from "next/dynamic";
import UserItem from "useritem";

type Member = {
  email: string;
  full_name: string;
  backgroundColor: string;
  role: string;
};

export default function TeamSettings() {
  const [members, setMembers] = useState<Member[]>([
    {
      email: "fkr@gmail.com",
      full_name: "Fany Kreminski",
      backgroundColor: "rgba(125,24,66,1)",
      role: "admin",
    },
  ]);

  return (
    <div className="grid gap-4">
      <header>
        <h2 className="text-[36px] font-[700]">Team Settings</h2>
      </header>
      <div>
        <div className="border rounded">
          {members.map((member: Member, key: number) => (
            <div key={key}>
              {member.full_name}
              <UserItem
                backgroundColor={member.backgroundColor}
                title={member.full_name}
                description={member.email}
                shadow={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
