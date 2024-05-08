import { Button, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: string;
};
const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const limit = 250;

  if (!children) return null;

  if (children.length <= limit)
    return <Text>{children}</Text>;

  const sumary = children.substring(0, limit);

  return (
    <>
      {isExpanded ? (
        <Text>
          {sumary}...
          <Button
            size={"xs"}
            fontWeight={"bold"}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show More" : "Show Less"}
          </Button>
        </Text>
      ) : (
        <Text>
          {children}{" "}
          <Button
            size={"xs"}
            fontWeight={"bold"}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show More" : "Show Less"}
          </Button>
        </Text>
      )}
    </>
  );
};

export default ExpandableText;
