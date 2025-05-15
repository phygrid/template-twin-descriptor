# Twin Descriptor Schema Guide

## Configuration Schema Structure For Desired Properties

This section provides an overview of the desired properties schema definition for twin descriptors. The schema definition determines how your twin's configuration form renders in the Console and establishes validation rules for your twin's desired property values.

## Annotations Usage

For optimal development experience, we recommend implementing descriptor schemas in TypeScript. This approach offers enhanced maintainability and type safety. Upon publication, your TypeScript schema will be automatically converted to standardized JSON Schema format.

TypeScript field annotations are translated into corresponding JSON schema properties:

```javascript
/**
 * @title Configuration Name
 * @default "Default Configuration"
 * @minLength 3
 * @maxLength 50
 */
configurationName: string;
```

The following sections demonstrate annotation examples, including Phygrid-specific implementations.

### Optional Properties

By default, all schema properties are required. To designate a property as optional, append a `?` to the property name:

```javascript
  additionalConfig?: string;
```

### Title Annotation

Use the title annotation to define a descriptive label that will be displayed in the Console:
```javascript
   * @title Connection Settings
```

### Default Values

Specify default values for properties using the default annotation. String values must be enclosed in quotation marks:
```javascript
   * @default "Default value"
```

### Special Input Types

#### Media Picker

```javascript
type Media = {
  ref: 'media';
  type: string;
  id: string;
  url: string;
};

export type Schema = {
  /**
   * @title Media
   * @ui mediaPicker
   */
   media: Media;
}
```

#### Queue Picker

```javascript
type Queue = {
  /**
   * @title Queue ID
   */
  queueId: string;

  /**
   * @title Organisation name
   */
  organization: string;

  /**
   * @title Queue endpoint
   */
  queueEndpoint: string;
};

export type Schema = {
  /**
   * @title Queue
   * @ui queuePicker
   */
  queue: Queue;
}
```

#### CSS Field

```javascript
  /**
   * @title CSS
   * @widget css
   */
  css: string;
```

#### Color Picker

```javascript
  /**
   * @title Color
   * @widget color
   */
  color: string;
```

#### Textarea

```javascript
  /**
   * @title Description
   * @widget textarea
   */
  description: string;
```

#### JavaScript Field

```javascript
  /**
   * @title JavaScript
   * @widget javascript
   */
  js: string;
```

#### Boolean Toggle

```javascript
  /**
   * @title Enable Feature
   * @default true
   */
  isEnabled: boolean;
```

#### Space Picker

Configure a space picker with filtering options:

```javascript
  /**
   * @title Space
   * @ui spacePicker
   * @uiOptions { filterTypes: ["location", "section"], showOnlyWithExternalId: true }
   */
  space: { id: string; externalId: string };
```

Available filter types:
- `location`
- `section`
- `floor`
- `custom`