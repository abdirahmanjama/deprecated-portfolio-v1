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
          id="blogs"
        >
          Featured Blogs
        </Text>
        <br />

        <Stack>
          <Blog
            title="Deep dive: CI/CD"
            tags="react, chakraui, jest, aws, css, html, javascript"
            description="After reading this article, you will be able to set up a fully automated, cloud native CI/CD pipeline for your React, Vue or Angular projects."
            article_url="https://medium.com/@abdirahman-jama/set-up-a-cloud-native-ci-cd-pipeline-in-under-7-minutes-using-aws-codepipeline-s3-and-codebuild-1b6166daf694"
          />
          <br />

          <Blog
            title="Event-driven architectures"
            tags="eventbridge, lambda, python, aws, devops"
            description="This article will show you how to set up an event driven architecture within your AWS environment. The things taught in this guide can form as a basis for some very powerful applications."
            article_url="https://towardsaws.com/set-up-a-chatops-notifications-service-within-your-aws-environment-in-5-minutes-using-eventbridge-4e22111d36ee"
          />
          <br />

          <Blog
            title="What is dependency injection?"
            tags="java, springboot, backend"
            description="This article goes through one of the fundamental concepts within Java Spring Boot: dependency injection. In software engineering, dependency injection is a technique whereby one object (or static method) supplies the dependencies of another object. A dependency is an object that can be used (a service)."
            article_url="https://abdirahman-jama.medium.com/what-is-dependency-injection-568af689117b"
          />
        </Stack>
      </Stack>
    </>
  );
}

export default Blogs;
