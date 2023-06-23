import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export interface TimelineProps {
  date: string;
  children: ReactNode;
}

const BackButton = () => {
  const router = useRouter();

  return (
    <Box
      onClick={() => {
        router.back();
      }}
      cursor="pointer"
      display="flex"
      gap={3}
      alignItems="center"
      justifyContent="start"
      width="125px"
    >
      <svg
        width="11"
        height="10"
        viewBox="0 0 11 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2_2540)">
          <path
            d="M1.25 5.75L10.25 5.75C10.6642 5.75 11 5.41421 11 5C11 4.58579 10.6642 4.25 10.25 4.25L1.25 4.25C0.835787 4.25 0.5 4.58579 0.5 5C0.5 5.41421 0.835787 5.75 1.25 5.75Z"
            fill="black"
          />
          <path
            d="M5.25 9L1.25 5L5.25 1"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_2540">
            <rect width="11" height="10" fill="white" transform="translate(11 10) rotate(-180)" />
          </clipPath>
        </defs>
      </svg>

      <Text
        fontSize="16px"
        color="#0D131B"
        alignItems="start"
        _hover={{ textDecoration: "underline" }}
      >
        Back
      </Text>
    </Box>
  );
};

export default BackButton;
