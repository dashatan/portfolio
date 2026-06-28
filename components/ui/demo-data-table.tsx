"use client";

import { useState } from "react";
import type { DemoTableRow } from "@/content/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { GridPanel, InsetPanel } from "@/components/ui/panel";
import { Eyebrow, Text } from "@/components/ui/typography";
import { cn } from "@/lib/cn";

type DemoDataTableProps = {
  panelTitle: string;
  badge: string;
  columns: {
    entity: string;
    path: string;
    status: string;
    render: string;
  };
  rows: DemoTableRow[];
  selectedRowTitle: string;
  selectedRowDescription: string;
};

export function DemoDataTable({
  panelTitle,
  badge,
  columns,
  rows,
  selectedRowTitle,
  selectedRowDescription,
}: DemoDataTableProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeRow = rows[activeIndex];

  return (
    <Card padding="none" overflow>
      <CardHeader>
        <Eyebrow tone="muted" tracking="tight">
          {panelTitle}
        </Eyebrow>
        <Badge variant="dim">{badge}</Badge>
      </CardHeader>

      <GridPanel>
        <InsetPanel>
          <div className="grid grid-cols-[1.1fr_1fr_auto_auto] gap-3 border-b border-border px-4 py-3 font-mono text-[10px] tracking-wide text-muted uppercase">
            <span>{columns.entity}</span>
            <span>{columns.path}</span>
            <span>{columns.status}</span>
            <span>{columns.render}</span>
          </div>
          {rows.map((row, index) => (
            <button
              key={row.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "grid w-full grid-cols-[1.1fr_1fr_auto_auto] gap-3 border-b",
                "border-border px-4 py-3 text-left text-sm transition-colors last:border-b-0",
                activeIndex === index
                  ? "bg-accent/20"
                  : "text-muted hover:bg-surface-elevated/70 hover:text-foreground",
              )}
            >
              <span className="font-mono text-xs">{row.id}</span>
              <span>{row.route}</span>
              <span>{row.status}</span>
              <span className="font-mono text-xs text-accent">{row.delay}</span>
            </button>
          ))}
        </InsetPanel>

        <InsetPanel elevated className="mt-4">
          <Eyebrow tone="muted" size="xs" tracking="tight">
            {selectedRowTitle}
          </Eyebrow>
          <p className="mt-2 text-sm">
            {activeRow.id} · {activeRow.route}
          </p>
          <Text variant="caption" className="mt-1">
            {selectedRowDescription}
          </Text>
        </InsetPanel>
      </GridPanel>
    </Card>
  );
}
