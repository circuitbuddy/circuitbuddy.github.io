import { PcbPart } from '../components/pcb-preview/pcb-preview.types';
import { BomRow } from '../interfaces/bom-row';

/**
 * Collapse a PCB part list into bill-of-materials rows: one row per distinct
 * designator, named by the part's `bomLabel`. Parts sharing a designator (both
 * 20k resistors marked `R1`, say) become one row whose `count` is how many of
 * them there are. Parts without a label are left out of the BOM.
 */
export function buildBom(parts: readonly PcbPart[]): BomRow[] {
  const rows = new Map<string, BomRow>();
  for (const part of parts) {
    if (!part.label) continue;
    let row = rows.get(part.label);
    if (!row) {
      row = { label: [], name: part.bomLabel, count: 0 };
      rows.set(part.label, row);
    }
    if (!row.label.includes(part.label)) {
      row.label.push(part.label);
    }
    row.count++;
  }
  return [...rows.values()];
}
