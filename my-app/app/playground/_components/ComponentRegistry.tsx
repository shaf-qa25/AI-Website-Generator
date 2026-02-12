import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export const COMPONENT_LIBRARY: Record<string, React.FC<any>> = {
    Card: ({ title, description, children }) => (
        <Card className="w-full shadow-sm">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && <p className="text-sm text-muted-foreground">{description}</p>}
            </CardHeader>
            <CardContent>{children}</CardContent>
        </Card>
    ),
    Button: ({ label, variant = "default", onClick }) => (
        <Button variant={variant} onClick={onClick}>
            {label}
        </Button>
    ),
    Input: ({ label, placeholder, type = "text" }) => (
        <div className="grid w-full items-center gap-1.5">
            {label && <label className="text-sm font-medium">{label}</label>}
            <Input type={type} placeholder={placeholder} />
        </div>
    ),
    Table: ({ headers, rows }) => (
        <Table>
            <TableHeader>
                <TableRow>
                    {headers?.map((h: string, i: number) => <TableCell key={i} className="font-bold">{h}</TableCell>)}
                </TableRow>
            </TableHeader>
            <TableBody>
                {rows?.map((row: any[], i: number) => (
                    <TableRow key={i}>
                        {row.map((cell, j) => <TableCell key={j}>{cell}</TableCell>)}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    ),
    Navbar: ({ logo, links }) => (
        <nav className="flex items-center justify-between p-4 border-b w-full bg-white">
            <div className="font-bold text-xl">{logo}</div>
            <div className="flex gap-4">
                {links?.map((link: string, i: number) => (
                    <span key={i} className="text-sm font-medium cursor-pointer">{link}</span>
                ))}
            </div>
        </nav>
    ),
    Sidebar: ({ items }) => (
        <div className="w-64 border-r h-full bg-gray-50 p-4 hidden md:block">
            <div className="flex flex-col gap-2">
                {items?.map((item: string, i: number) => (
                    <div key={i} className="p-2 hover:bg-gray-200 rounded-md cursor-pointer text-sm font-medium">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    ),
    Modal: ({ title, triggerLabel, content }) => (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">{triggerLabel}</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div className="py-4 text-sm">{content}</div>
            </DialogContent>
        </Dialog>
    ),
};

export const REGISTRY_METADATA = {
    Card: { props: ["title", "description", "children"] },
    Button: { props: ["label", "variant"], variants: ["default", "outline", "destructive", "secondary"] },
    Input: { props: ["label", "placeholder", "type"] },
    Table: { props: ["headers", "rows"] }
};