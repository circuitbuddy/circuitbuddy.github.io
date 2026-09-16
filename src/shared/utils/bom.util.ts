import { PcbPart } from '../components/pcb-preview/pcb-preview.types';
import { BomRow } from '../interfaces/bom-row';

/**
 * Collapse a PCB part list into bill-of-materials rows: one row per distinct
 * part name, carrying every designator that part is fitted under. Designators
 * are de-duplicated, so two parts sharing a label (both 20k resistors marked
 * `R1`, say) list it once. Parts without a label are left out of the BOM.
 */
export function buildBom(parts: readonly PcbPart[]): BomRow[] {
  const rows = new Map<string, BomRow>();
  for (const part of parts) {
    if (!part.label) continue;
    let row = rows.get(part.name);
    if (!row) {
      row = { label: [], name: part.name };
      rows.set(part.name, row);
    }
    if (!row.label.includes(part.label)) {
      row.label.push(part.label);
    }
  }
  return [...rows.values()];
}
