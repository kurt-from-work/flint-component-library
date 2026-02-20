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
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { Calendar } from "@/components/ui/calendar";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
} from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { CalendarIcon, Check, ChevronsUpDown, DollarSign, Mail, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const subjects = [
  { value: "math", label: "Mathematics" },
  { value: "science", label: "Science" },
  { value: "english", label: "English" },
  { value: "history", label: "History" },
  { value: "art", label: "Art" },
];

export default function InputsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [sliderValue, setSliderValue] = useState([50]);
  const [comboOpen, setComboOpen] = useState(false);
  const [comboValue, setComboValue] = useState("");
  const [pickerOpen, setPickerOpen] = useState(false);
  const [pickerDate, setPickerDate] = useState<Date | undefined>();

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

      <ShowcaseSection title="Input Group" description="Group inputs with addons like icons, text, or buttons.">
        <div className="grid gap-4 max-w-sm">
          <div className="space-y-2">
            <Label>With icon</Label>
            <InputGroup>
              <InputGroupAddon>
                <InputGroupText><Search className="h-4 w-4" /></InputGroupText>
              </InputGroupAddon>
              <InputGroupInput placeholder="Search..." />
            </InputGroup>
          </div>
          <div className="space-y-2">
            <Label>With prefix text</Label>
            <InputGroup>
              <InputGroupAddon>
                <InputGroupText><DollarSign className="h-4 w-4" /></InputGroupText>
              </InputGroupAddon>
              <InputGroupInput placeholder="0.00" type="number" />
            </InputGroup>
          </div>
          <div className="space-y-2">
            <Label>With suffix text</Label>
            <InputGroup>
              <InputGroupInput placeholder="username" />
              <InputGroupAddon align="inline-end">
                <InputGroupText>@flint.com</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Field" description="Structured form field with label, description, and error states.">
        <div className="grid gap-6 max-w-sm">
          <Field>
            <FieldLabel>Display name</FieldLabel>
            <Input placeholder="Enter your name" />
            <FieldDescription>This is your public display name.</FieldDescription>
          </Field>
          <Field data-invalid="true">
            <FieldLabel>Email</FieldLabel>
            <Input placeholder="name@example.com" aria-invalid="true" />
            <FieldError>Please enter a valid email address.</FieldError>
          </Field>
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

      <ShowcaseSection title="Native Select" description="A styled native HTML select element.">
        <div className="max-w-sm space-y-2">
          <Label>Grade Level</Label>
          <NativeSelect>
            <NativeSelectOption value="" disabled>Select a grade</NativeSelectOption>
            <NativeSelectOption value="k">Kindergarten</NativeSelectOption>
            <NativeSelectOption value="1">1st Grade</NativeSelectOption>
            <NativeSelectOption value="2">2nd Grade</NativeSelectOption>
            <NativeSelectOption value="3">3rd Grade</NativeSelectOption>
            <NativeSelectOption value="4">4th Grade</NativeSelectOption>
            <NativeSelectOption value="5">5th Grade</NativeSelectOption>
          </NativeSelect>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Combobox" description="Searchable select with autocomplete — built from Popover + Command.">
        <div className="max-w-sm space-y-2">
          <Label>Subject</Label>
          <Popover open={comboOpen} onOpenChange={setComboOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={comboOpen}
                className="w-full justify-between"
              >
                {comboValue
                  ? subjects.find((s) => s.value === comboValue)?.label
                  : "Select subject..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[min(300px,80vw)] p-0">
              <Command>
                <CommandInput placeholder="Search subjects..." />
                <CommandList>
                  <CommandEmpty>No subject found.</CommandEmpty>
                  <CommandGroup>
                    {subjects.map((s) => (
                      <CommandItem
                        key={s.value}
                        value={s.value}
                        onSelect={(val) => {
                          setComboValue(val === comboValue ? "" : val);
                          setComboOpen(false);
                        }}
                      >
                        <Check className={cn("mr-2 h-4 w-4", comboValue === s.value ? "opacity-100" : "opacity-0")} />
                        {s.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Date Picker" description="A date selection control — built from Popover + Calendar.">
        <div className="max-w-sm space-y-2">
          <Label>Date of birth</Label>
          <Popover open={pickerOpen} onOpenChange={setPickerOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn("w-full justify-start text-left font-normal", !pickerDate && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {pickerDate ? pickerDate.toLocaleDateString() : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={pickerDate}
                onSelect={(d) => {
                  setPickerDate(d);
                  setPickerOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>
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
