import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react"
import { FC,memo, useState,ChangeEvent } from "react"
import { useAuth } from "../../hooks/useAuth";
import { PrimaryButton } from "../atoms/button/PrimaryButton"

export const Login: FC = memo(() => {
    const { login, loading } = useAuth();
    const [userId, SetUserId] = useState('');

    const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => SetUserId(e.target.value)

    const onClickLogin = () => login(userId);

    return (
        <Flex align="center" justify="center" height="100vh">
            <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
                <Heading as="h1" size="lg" textAlign="center">ユーザー管理アプリ</Heading>
                <Divider my={4} />
                <Stack spacing={6} py={4} px={10}>
                    <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId} />
                    <PrimaryButton
                        loading={loading}
                        disabled={userId === ""}
                        onClick={onClickLogin}
                    >
                        ログイン
                    </PrimaryButton>
                </Stack>
                
            </Box>
        </Flex>
    )
})