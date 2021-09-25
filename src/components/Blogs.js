import { useColorModeValue } from "@chakra-ui/color-mode";
import { Stack, Text } from "@chakra-ui/layout";
import React from "react";
import Blog from "./Blog";

function Blogs() {
  return (
    <>
      <Stack as="main" color={useColorModeValue("white, black")} mb="100">
        <Text
          fontSize={"3xl"}
          fontWeight="extrabold"
          textAlign="left"
          align="start"
          mt={10}
        >
          Featured Blogs
        </Text>
        <br />

        <Stack>
        <Blog
            title="Set up a cloud-native CI/CD Pipeline in under 7 minutes using AWS CodePipeline, S3 and CodeBuild"
            tags="react, chakraui, jest, aws, css, html, javascript"
            description="After reading this article, you will be able to set up a fully automated, cloud native CI/CD pipeline for your React, Vue or Angular projects."
            article_url="https://towardsaws.com/set-up-a-chatops-notifications-service-within-your-aws-environment-in-5-minutes-using-eventbridge-4e22111d36ee"
          />
          <br />

          <Blog
            title="Set up a ChatOps notifications service within your AWS environment in 5 minutes using AWS and Python"
            tags="eventbridge, lambda, python, aws, devops"
            description="This article will show you how to set up an event driven architecture within your AWS environment. The things taught in this guide can form as a basis for some very powerful applications."
            article_url="https://towardsaws.com/set-up-a-chatops-notifications-service-within-your-aws-environment-in-5-minutes-using-eventbridge-4e22111d36ee"
          />
          <br />

          <Blog
            title="How to build a website in 2021"
            tags="react, vanillajs, html, ux, css, html, javascript"
            description="After reading this article, you will know what to do when you're tasked with building a website from scratch. From design to implementation - we cover everything in this article and we've left no stones unturned."
            article_url="https://towardsaws.com/set-up-a-chatops-notifications-service-within-your-aws-environment-in-5-minutes-using-eventbridge-4e22111d36ee"
          />
          <br />

          <Blog
            title="What is dependency injection?"
            tags="java, springboot, backend, microservices, inversion of control"
            description="This article goes through one of the fundamental concepts within Java Spring Boot: dependency injection. In software engineering, dependency injection is a technique whereby one object (or static method) supplies the dependencies of another object. A dependency is an object that can be used (a service)."
            article_url="https://abdirahman-jama.medium.com/what-is-dependency-injection-568af689117b"
          />
        </Stack>
      </Stack>
    </>
  );
}

export default Blogs;
