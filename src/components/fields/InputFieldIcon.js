import React from "react";
import {SingleLineTextIcon, 
        LongTextIcon,
        AttachmentIcon,
        CheckboxIcon,
        MultipleSelectIcon,
        SingleSelectIcon,
        UserIcon,
        DateIcon,
        PhoneNumberIcon,
        EmailIcon,
        URLIcon,
        NumberIcon,
        CurrencyIcon,
        PercentIcon,
        DurationIcon,
        RatingIcon,
        FormulaIcon,
        RollupIcon,
        CountIcon,
        LookupIcon,
        CreatedByIcon,
        LastModifiedByIcon,
        AutoNumberIcon,
        BarcodeIcon,
        ButtonIcon,
        CreatedTimeIcon,
        LastModifiedTimeIcon,
} from '../Icons';

export default function InputFieldIcon (props) {

    const render = (fieldType) => {
        switch (fieldType) {
          case "Single Line Text":
            return <SingleLineTextIcon />;
          case "Long Text":
            return <LongTextIcon />;
          case "Attachment":
            return <AttachmentIcon />;
          case "Checkbox":
            return <CheckboxIcon />;
          case "Multiple select":
            return <MultipleSelectIcon />;
          case "Single select":
            return <SingleSelectIcon />;
          case "User":
            return <UserIcon />;
          case "Date":
            return <DateIcon />;
          case "Phone number":
            return <PhoneNumberIcon />;
          case "Email":
            return <EmailIcon />;
          case "URL":
            return <URLIcon />;
          case "Number":
            return <NumberIcon />;
          case "Currency":
            return <CurrencyIcon />;
          case "Percent":
            return <PercentIcon />;
          case "Duration":
            return <DurationIcon />;
          case "Rating":
            return <RatingIcon />;
          case "Formula":
            return <FormulaIcon />;
          case "Rollup":
            return <RollupIcon />;
          case "Count":
            return <CountIcon />;
          case "Lookup":
            return <LookupIcon />;
          case "Created time":
            return <CreatedTimeIcon />;
          case "Last modified time":
            return <LastModifiedTimeIcon />;
          case "Created by":
            return <CreatedByIcon />;
          case "Last modified by":
            return <LastModifiedByIcon />;
          case "Auto number":
            return <AutoNumberIcon />;
          case "Barcode":
            return <BarcodeIcon />;
          case "Button":
            return <ButtonIcon />;
          default:
            return null;
        }
      };
    
    return (
      render(props.fieldType)
    )
}