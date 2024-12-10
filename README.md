# Angular 98 UI Library

This project is an Angular-based UI component library that emulates the look and feel of the classic Microsoft Windows 98 interface. It includes a variety of components such as buttons, dialogs, checkboxes, and other UI elements designed with the 98.css styling library.

Note: still highly experimental, not ready for production use.

## Features

- **Windows 98 Styled Components:** All components use styles from the [98.css](https://github.com/jdan/98.css) library to give your Angular apps a nostalgic look and feel.
- **Modular:** Components are designed to be modular, so you can use them individually or in combination, depending on your needs.
- **Standalone Components:** Each component is standalone and can be easily imported into your Angular project.

## Installation

To get started with this library, you can install it via npm:

```bash
npm install angular-98
```

## Usage

Once installed, you can import and use the components in your Angular application.

1. Import the components into your app
   
First, import the necessary components into your Angular module:
```bash
import { ButtonComponent } from 'angular-98';
import { DialogComponent } from 'angular-98';
import { CheckboxComponent } from 'angular-98';
import { FieldRowComponent } from 'angular-98';
```

2. Add components to your template

You can then use the components in your templates as shown below:
```
<!-- Button Example -->
<button-98 label="Click Me"></button-98>

<!-- Dialog Example -->
<dialog-98 title="Hello World" description="This is a sample dialog" [visible]="true"></dialog-98>

<!-- Checkbox Example -->
<checkbox-98 [(checked)]="checkboxChecked" label="Accept Terms and Conditions"></checkbox-98>

<!-- Field Row Example (for grouping) -->
<field-row-98>
  <checkbox-98 label="Option 1"></checkbox-98>
</field-row-98>
<field-row-98>
  <checkbox-98 label="Option 2"></checkbox-98>
</field-row-98>
```

## Customizing the Components

Each component allows customization through its inputs. For example, you can change the text on buttons, toggle checkboxes, or show/hide dialogs using the relevant inputs:

- **label:** Text to display on the button or checkbox.
- **checked:** Boolean state for checkboxes.
- **visible:** Control visibility of dialogs.
- **disabled:** Make components disabled.
- **primary:** Mark the button as primary.

## License

This project is licensed under the MIT License
