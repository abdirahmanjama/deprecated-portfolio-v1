import { useColorModeValue } from "@chakra-ui/color-mode";
import { Stack, Text } from "@chakra-ui/layout";
import React from "react";
import Blog from "../components/Blog";

export default function Blogs() {
  return (
    <>
      <Stack
        as="main"
        color={useColorModeValue("white, black")}
        mb="100"
        w="100%"
      >
        <Text
          fontSize={"3xl"}
          fontWeight="extrabold"
          textAlign="left"
          align="start"
          id="blogs"
          w="100%"
        >
          Featured Blogs
        </Text>
        <br />
        <Stack>
          <Blog
            title="Tips for landing your first developer role!"
            tags="career, coding, compsci, algorithms, design, systems"
            description="Do you know how to build a large scale distributed system that can handle 100 million requests?"
            article_url="https://medium.com/p/d552075c1b74"
          />
          <br />
          <Blog
            title="Deep dive: CI/CD"
            tags="react, chakraui, jest, aws, css, html, javascript"
            description="Learn how to build a fully automated, cloud native CI/CD pipeline!"
            article_url="https://medium.com/@abdirahman-jama/set-up-a-cloud-native-ci-cd-pipeline-in-under-7-minutes-using-aws-codepipeline-s3-and-codebuild-1b6166daf694"
          />
          <br />

          <Blog
            title="Event-driven architectures"
            tags="eventbridge, lambda, python, aws, devops"
            description="Learn how to build event driven architecture within your AWS environment!"
            article_url="https://towardsaws.com/set-up-a-chatops-notifications-service-within-your-aws-environment-in-5-minutes-using-eventbridge-4e22111d36ee"
          />
          <br />
        </Stack>
      </Stack>
    </>
  );
}
