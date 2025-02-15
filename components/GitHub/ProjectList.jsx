"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, RefreshCw, Star, GitFork } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { toast } from "sonner";
import { BorderBeam } from "../magicui/border-beam";

export default function GitHubProjectList() {

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [starredRepos, setStarredRepos] = useState(new Set());

  const fetchRepos = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://api.github.com/users/mhuwaimel/repos"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch repositories");
      }
      const data = await response.json();
      setRepos(data);
    } catch (err) {
      setError(
        "An error occurred while fetching repositories. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };
  const handleStar = (repoId, repoName) => {
    setStarredRepos((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(repoId)) {
        newSet.delete(repoId);
        toast.info(`Repository Unstarred`, {
          description: `You've unstarred ${repoName}`,
        });
      } else {
        newSet.add(repoId);
        toast.success("Repository Starred", {
          description: `You've starred ${repoName}`,
        });
      }
      return newSet;
    });
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div className="py-4 mt-2 sm:py-6 sm:mt-8">
      <div className="text-center">
        <h2 className="font-general-medium font-[Mada] text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          آخر المشاريع
        </h2>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <AnimatePresence>
         
          {repos.map((repo) => (
            <motion.div
              key={repo.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card
                className="h-full flex flex-col bg-white  
              shadow-lg cursor-pointer animate_top rounded-xl hover:shadow-xl
              relative overflow-hidden
              "
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[#3a37ab]">
                    {repo.name}
                  </CardTitle>
                  <CardDescription className="text-gray-700">
                    {repo.description || "No description available"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.language && (
                      <Badge
                        variant="secondary"
                        className="bg-[#6936f5] hover:bg-[#aba9ff] text-white"
                      >
                        {repo.language}
                      </Badge>
                    )}
                    <Badge
                      variant="outline"
                      className={`flex items-center ${
                        starredRepos.has(repo.id)
                          ? "text-green-700"
                          : "text-gray-900"
                      }`}
                      onClick={() => handleStar(repo.id, repo.name)}
                    >
                      <Star className="mr-1 h-3 w-3" /> {repo.stargazers_count}
                    </Badge>
                    <Badge variant="outline" className="flex items-center">
                      <GitFork className="mr-1 h-3 w-3" /> {repo.forks_count}
                    </Badge>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full mt-auto font-[cairo]"
                  >
                    <Link
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="استعراض المشروع"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> استعراض على
                      GitHub
                    </Link>
                  </Button>
                </CardContent>
                <BorderBeam
        duration={6}
        delay={3}
        size={400}
     
        
      />
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
