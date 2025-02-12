import * as React from 'react';
import { Text } from '@fluentui/react-components';
import { Label } from '@fluentui/react-label';
import { useId } from '@fluentui/react-utilities';
import { Radio, RadioGroup } from '../index';

export const LabelSubtext = () => {
  const labelId = useId('label');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Label id={labelId}>Favorite Fruit</Label>
      <RadioGroup>
        <Radio
          value="A"
          label={
            <>
              Banana
              <br />
              <Text size={200}>This is an example subtext of the first option</Text>
            </>
          }
        />
        <Radio
          value="B"
          label={
            <>
              Pear
              <br />
              <Text size={200}>This is some more example subtext</Text>
            </>
          }
        />
      </RadioGroup>
    </div>
  );
};
LabelSubtext.parameters = {
  docs: {
    description: {
      story: "Radio's label supports any formatted text. In this example, smaller text is below the main label text.",
    },
  },
};
