"use client"
import React from 'react';
import { COMPONENT_LIBRARY } from './ComponentRegistry';

interface UIConfigItem {
    component: string;
    props: any;
    children?: UIConfigItem[];
}

interface UIRendererProps {
    config: UIConfigItem[];
}

function UIRenderer({ config }: UIRendererProps) {
    const renderComponent = (item: UIConfigItem, index: number) => {
        const Component = COMPONENT_LIBRARY[item.component];

        if (!Component) {
            console.warn(`Component ${item.component} not found in registry.`);
            return null;
        }

        const renderedChildren = item.children
            ? item.children.map((child, i) => renderComponent(child, i))
            : item.props.children;

        return (
            <Component key={`${item.component}-${index}`} {...item.props}>
                {renderedChildren}
            </Component>
        );
    };

    return (
        <div className="flex flex-col gap-4 w-full h-full p-4 overflow-auto bg-slate-50">
            {config && config.length > 0 ? (
                config.map((item, index) => renderComponent(item, index))
            ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                    Your UI will appear here...
                </div>
            )}
        </div>
    );
}

export default UIRenderer;