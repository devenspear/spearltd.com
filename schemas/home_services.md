---
_schema: home_services
heading:
  type: text
  label: Heading
subheading:
  type: text
  label: Subheading
services:
  type: array
  label: Services
  array_structures:
    values:
      value:
        title:
          type: text
          label: Service Title
        description:
          type: text
          label: Service Description
        icon:
          type: select
          label: Icon
          options:
            values:
              - document
              - money
              - consultation
        button_text:
          type: text
          label: Button Text
        button_url:
          type: text
          label: Button URL
        color:
          type: select
          label: Color Theme
          options:
            values:
              - green-800
              - blue-800
              - green-600
---
