import { ArrowDownRightIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Link from "next/link";

const projects = [
  {
    title: "broadcasting-tower",
    description:
      "This is a simple broadcasting tower service. You can broadcast messages and query them.",
    url: "https://github.com/michal-wrzosek/broadcasting-tower",
  },
  {
    title: "next-styled-components",
    description:
      "Styled-Components that are compatible with Next.js server components (RSC)",
    url: "https://github.com/michal-wrzosek/next-styled-components",
  },
  {
    title: "next-data-streaming",
    description: "Next.js progressive partial data streaming library",
    url: "https://github.com/michal-wrzosek/next-data-streaming",
  },
  {
    title: "remote-viewing",
    description:
      "Remote Viewing experiment application built with Supabase and OpenAI",
    url: "https://github.com/michal-wrzosek/remote-viewing",
  },
  {
    title: "imap-emails",
    description:
      'ImapEmails is wrapping "imap" and "mailparser" library and exposes simple interface to fetch your latest emails from Gmail or any other inbox supporting IMAP',
    url: "https://github.com/michal-wrzosek/imap-emails",
  },
  {
    title: "r/UFOs refresher",
    description: "Simple way to stay up to date with latest UFO news",
    url: "https://github.com/michal-wrzosek/ufos-refresher",
  },
  {
    title: "zaxido.com",
    description:
      "Website filtering out only positive content from Reddit's /r/popular using AI.",
    url: "https://zaxido.com",
  },
  {
    title: "ZKlar - zero-knowledge technology",
    description:
      "ZKlar - ZK-Rollups for private transactions on Ethereum using Circom circuits (work in progress)",
    url: "https://zklar.com",
  },
  {
    title: "Vaccination Certificates",
    description:
      "Decentralized Ethereum Application (DAPP) providing solution for COVID-19 Vaccination Certificates",
    url: "https://github.com/michal-wrzosek/vaccination-certificates",
  },
  {
    title: "pitupitu - virtual office app",
    description: "Virtual venue video-conferencing application",
    url: "https://pitupitu.chat/",
  },
  {
    title: "p2p-chat",
    description:
      "p2p chat on WebRTC with additional AES256 encryption and file sharing",
    url: "https://github.com/michal-wrzosek/p2p-chat",
  },
  {
    title: "react-component-lib",
    description:
      "Boilerplate repo for creating npm packages with React components written in TypeScript and using styled-components.",
    url: "https://github.com/michal-wrzosek/react-component-lib",
  },
  {
    title: "subscribe-context",
    description: "React Hooks for Subscribable Subject in Context Pattern.",
    url: "https://github.com/michal-wrzosek/subscribe-context",
  },
  {
    title: "schemat",
    description:
      "Simple runtime schema validator for projects in Node.js/Typescript.",
    url: "https://github.com/michal-wrzosek/schemat",
  },
  {
    title: "moorage",
    description:
      "moorage - Server side rendering masonry like react layout component.",
    url: "https://github.com/michal-wrzosek/moorage",
  },
  {
    title: "zksync-messages",
    description: "Ethereum zkSync messages dapp (proof of concept)",
    url: "https://github.com/michal-wrzosek/zksync-messages",
  },
  {
    title: "use-css-var",
    description:
      "React hook that will allow you to control randomly generated CSS variable.",
    url: "https://github.com/michal-wrzosek/use-css-var",
  },
  {
    title: "express-boilerplate",
    description: "Express boilerplate",
    url: "https://github.com/michal-wrzosek/express-boilerplate",
  },
  {
    title: "create-react-app-boilerplate",
    description: "Create React App Boilerplate",
    url: "https://github.com/michal-wrzosek/create-react-app-boilerplate/compare/c329d3dc3892bc3e19c78d06a840edb8975078c3...master",
  },
  {
    title: "graphql-jwt-auth-boilerplate",
    description: "GraphQL server + JWT authentication with refresh tokens",
    url: "https://github.com/michal-wrzosek/graphql-jwt-auth-boilerplate",
  },
  {
    title: "web-admin-api",
    description: "Fullstack boilerplate.",
    url: "https://github.com/michal-wrzose,k/web-admin-api",
  },
  {
    title: "worp",
    description: "Fixtures generator package",
    url: "https://github.com/michal-wrzosek/worp",
  },
  {
    title: "challenge-app",
    description: "Demo react search app with authentication",
    url: "https://github.com/michal-wrzosek/challenge-app",
  },
  {
    title: "challenge-api",
    description: "Demo express.js api with authentication",
    url: "https://github.com/michal-wrzosek/challenge-api",
  },
  {
    title: "gtd-inbox",
    description: "React Native 'Getting Things Done' Inbox iOS & Android App",
    url: "https://github.com/michal-wrzosek/gtd-inbox",
  },
  {
    title: "cyrylica-quiz",
    description:
      "This is a small Quiz game for Polish speakers learning Russian alphabet.",
    url: "https://github.com/michal-wrzosek/cyrylica-quiz",
  },
  {
    title: "deep-names",
    description:
      "Analysis of company names from Fortune 500 used to generate pseudo-random company names.",
    url: "https://github.com/michal-wrzosek/deep-names",
  },
  {
    title: "real-estate-price-prediction",
    description: "Machine learning model for predicting real estate prices",
    url: "https://github.com/michal-wrzosek/real-estate-price-prediction",
  },
  {
    title: "annumi.com",
    description:
      "e-commerce side project. React + Express.js + Stripe. This project is only partially open sourced",
    url: "https://annumi.com",
  },
];

export const metadata: Metadata = {
  title: "Michał Wrzosek - Projects",
  description:
    "A collection of my personal and open-source projects as a web developer.",
};

export default function Page() {
  return (
    <div className="w-full md:w-320 md:mx-auto p-6 flex flex-col gap-6 border-t-2">
      {projects.map(({ title, description, url }, index) => (
        <div key={index} className="max-w-220">
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl font-semibold flex items-center gap-2 hover:underline"
          >
            {title}
            <ArrowDownRightIcon className="hidden md:block size-6" />
          </Link>
          <div>{description}</div>
        </div>
      ))}
    </div>
  );
}
