/**
 * Base interface that defines the structure all twin descriptors must follow
 */
// interface BaseTwinDescriptorSchema {
//     /**
//      * Available actions that can be performed on the twin
//      */
//     actions: {
//         [actionName: string]: {
//             params: Record<string, unknown>;
//             returns: Record<string, unknown>;
//         }
//     };
    
//     /**
//      * Events that can be emitted by the twin
//      */
//     events: {
//         [eventName: string]: {
//             payload: Record<string, unknown>;
//         }
//     };
    
//     /**
//      * Properties that can be set on the twin
//      */
//     desiredProperties: {
//         [otherPropName: string]: unknown;
//     };
    
//     /**
//      * Properties that reflect the twin's current state
//      */
//     reportedProperties: Record<string, unknown>;
// }


export interface Schema {
    actions: {
        exampleAction: {
            params: {
                delay: number;
            };
            returns: {
                success: boolean;
            };
        };
    };
    events: {
        onExample: {
            payload: {
                oldStatus: string;
                newStatus: string;
                timestamp: number;
            };
        };
    };
    desiredProperties: {
        /**
         * @title Configuration Value
         * @default "Default configuration"
         * @minLength 5
         * @maxLength 100
         */
        exampleConfigurationValue: string;
        /**
         * @title Color
         * @widget color
         */
        color?: string;
    };
    reportedProperties: {
        temperature: number;
    };
}