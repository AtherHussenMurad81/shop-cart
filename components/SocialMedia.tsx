import React from "react";
import { Github, Linkedin, Facebook, Slack } from "lucide-react";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialData = [
  {
    title: "Github",
    href: "https://github.com",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "Linkedin",
    href: "https://linkedin.com",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Facebook",
    href: "https://facebook.com",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "Slack",
    href: "https://slack.com",
    icon: <Slack className="w-5 h-5" />,
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialData.map((item) => (
          <Tooltip key={item.title}>
            <TooltipTrigger>
              <Link
                href={item.href}
                target="_blank"
                className={cn(
                  "p-2 rounded-full hover:text-gray-900  transition-all duration-300",
                  iconClassName,
                )}
              >
                {item.icon}
              </Link>
            </TooltipTrigger>

            <TooltipContent
              className={cn(
                "bg-white text-darkColor font-semibold border border-shop_light_green",
                tooltipClassName,
              )}
            >
              {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
