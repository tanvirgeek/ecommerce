import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <Button variant={"elevated"}>I am a Button</Button>
      </div>

      <Input placeholder="I am an input" />
      <Progress value={30} />
      <Textarea placeholder="I am a text area" />
    </div>
  );
}
