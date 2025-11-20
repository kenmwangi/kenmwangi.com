import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignUpTab from "../components/sign-up-tab";
import SignInTab from "../components/sign-in-tab";

export default function LoginPage() {
  return (
    <main className="max-w-3xl mx-auto space-y-6 px-4 py-10">
      <Tabs defaultValue="signin" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signin">Sign in</TabsTrigger>
          <TabsTrigger value="signup">Sign up</TabsTrigger>
        </TabsList>
        <Card>
          <TabsContent value="signin" className="space-y-6">
            <CardHeader className="text-2xl font-bold">
              <CardTitle>Sign in</CardTitle>
              <CardDescription>
                Enter your email and Password to continue.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SignInTab />
            </CardContent>
          </TabsContent>

          <TabsContent value="signup" className="space-y-6">
            <CardHeader className="text-2xl font-bold">
              <CardTitle>Sign up</CardTitle>
              <CardDescription>Create an account</CardDescription>
            </CardHeader>
            <CardContent>
              <SignUpTab />
            </CardContent>
          </TabsContent>
        </Card>
      </Tabs>
    </main>
  );
}
