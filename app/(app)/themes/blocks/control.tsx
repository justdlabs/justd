import React, { useState } from "react"

import { Card, Checkbox, CheckboxGroup, Radio, RadioGroup } from "ui"

export function Control() {
  const [selectedRadio, setSelectedRadio] = useState("lowSecurity")
  return (
    <Card className="grid place-content-center px-4 py-16">
      <RadioGroup aria-label="Security" value={selectedRadio} onChange={setSelectedRadio}>
        <Radio value="highSecurity" description="Set security settings to high.">
          High Security
        </Radio>
        <CheckboxGroup
          defaultValue={["encryption"]}
          className="ml-6"
          isDisabled={selectedRadio !== "highSecurity"}
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
    </Card>
  )
}
