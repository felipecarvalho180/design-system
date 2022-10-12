import { Meta, StoryObj } from "@storybook/react";
import { CheckBox, CheckBoxProps } from "./CheckBox";
import { Text } from "./Text";

export default {
  title: "Components/CheckBox",
  component: CheckBox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <label className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Lembrar de mim por 30 dias</Text>
        </label>
      );
    },
  ],
} as Meta<CheckBoxProps>;

export const Default: StoryObj<CheckBoxProps> = {};
