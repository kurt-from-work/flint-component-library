"use client";

import { useState } from "react";
import { ShowcaseLayout } from "@/client/components/showcase-layout";
import { ShowcaseSection } from "@/client/components/showcase-section";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";

export default function InputsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [sliderValue, setSliderValue] = useState([50]);

  return (
    <ShowcaseLayout>
      <h1 className="text-3xl font-bold tracking-tight mb-2">
        Inputs &amp; Forms
      </h1>
      <p className="text-muted-foreground mb-8">
        Form controls, selection inputs, and date pickers.
      </p>

      <ShowcaseSection title="Input" description="Standard text input with label.">
        <div className="grid gap-4 max-w-sm">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="disabled">Disabled</Label>
            <Input id="disabled" disabled placeholder="Disabled input" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="file">File upload</Label>
            <Input id="file" type="file" />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Textarea" description="Multi-line text input.">
        <div className="max-w-sm space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Type your message here..." />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Select" description="Dropdown selection.">
        <div className="max-w-sm space-y-2">
          <Label>Subject</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="math">Mathematics</SelectItem>
              <SelectItem value="science">Science</SelectItem>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="history">History</SelectItem>
              <SelectItem value="art">Art</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Checkbox" description="Toggle individual options on or off.">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" defaultChecked />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" />
            <Label htmlFor="newsletter">Subscribe to newsletter</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled-check" disabled />
            <Label htmlFor="disabled-check" className="text-muted-foreground">Disabled option</Label>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Radio Group" description="Select one option from a group.">
        <RadioGroup defaultValue="comfortable" className="space-y-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="compact" />
            <Label htmlFor="compact">Compact</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="comfortable" />
            <Label htmlFor="comfortable">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="spacious" id="spacious" />
            <Label htmlFor="spacious">Spacious</Label>
          </div>
        </RadioGroup>
      </ShowcaseSection>

      <ShowcaseSection title="Switch" description="A toggle switch for binary settings.">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch id="airplane" />
            <Label htmlFor="airplane">Airplane Mode</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="notifications" defaultChecked />
            <Label htmlFor="notifications">Enable notifications</Label>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Slider" description="An input for selecting a value from a range.">
        <div className="max-w-sm space-y-4">
          <Label>Volume: {sliderValue[0]}%</Label>
          <Slider
            value={sliderValue}
            onValueChange={setSliderValue}
            max={100}
            step={1}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Calendar" description="A date picker calendar.">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border w-fit"
        />
      </ShowcaseSection>

      <ShowcaseSection title="Input OTP" description="One-time password input.">
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </ShowcaseSection>
    </ShowcaseLayout>
  );
}
