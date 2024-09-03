'use client';
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  // Ensure id is a string
  if (typeof id !== 'string') {
    return res.status(400).json({ error: "Invalid ID" });
  }

  // Convert id to a number
  const idNumber = parseInt(id, 10);

  // Check if id is a valid number
  if (isNaN(idNumber)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  try {
    if (req.method === "GET") {
      const post = await prisma.post.findUnique({
        where: { id: idNumber },
      });
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ error: "Post not found" });
      }
    } else if (req.method === "PUT") {
      const { title, content } = req.body;
      const updatedPost = await prisma.post.update({
        where: { id: idNumber },
        data: { title, content },
      });
      res.status(200).json(updatedPost);
    } else if (req.method === "DELETE") {
      await prisma.post.delete({
        where: { id: idNumber },
      });
      res.status(204).end();
    } else {
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}