---
_schema: contact_details
heading:
  type: text
  label: Heading
phone:
  type: object
  label: Phone Information
  fields:
    label:
      type: text
      label: Label
    number:
      type: text
      label: Phone Number
    url:
      type: text
      label: Phone URL (tel:)
email:
  type: object
  label: Email Information
  fields:
    label:
      type: text
      label: Label
    address:
      type: text
      label: Email Address
    url:
      type: text
      label: Email URL (mailto:)
service_area_heading:
  type: text
  label: Service Area Heading
service_area_text:
  type: markdown
  label: Service Area Text
---
