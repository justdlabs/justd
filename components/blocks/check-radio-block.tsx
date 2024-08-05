'use client'

import React, { useState } from 'react'

import { CardBlock } from '@/components/blocks'
import { Checkbox, CheckboxGroup, Radio, RadioGroup } from 'ui'

export function CheckRadioBlock() {
  const [selectedRadio, setSelectedRadio] = useState('lowSecurity')
  return (
    <CardBlock>
      <RadioGroup value={selectedRadio} onChange={setSelectedRadio}>
        <Radio value="highSecurity" description="Set security settings to high.">
          High Security
        </Radio>
        <CheckboxGroup
          defaultValue={['encryption']}
          className="ml-6"
          isDisabled={selectedRadio !== 'highSecurity'}
        >
          <Checkbox value="encryption" description="Enable encryption." isReadOnly>
            Encryption
          </Checkbox>
          <Checkbox value="firewall" description="Enable firewall protection.">
            Firewall
          </Checkbox>
          <Checkbox value="backup" description="Enable automatic backups.">
            Backup
          </Checkbox>
          <Checkbox value="anomalyDetection" description="Enable anomaly detection.">
            Anomaly Detection
          </Checkbox>
        </CheckboxGroup>
        <Radio value="lowSecurity" description="Set security settings to low.">
          Low Security
        </Radio>
        <Radio value="customSecurity" description="Customize security settings.">
          Customize Security
        </Radio>
      </RadioGroup>
    </CardBlock>
  )
}
