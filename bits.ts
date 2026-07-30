/**
 * bits.ts
 * Generic I2C Extension v2.0
 */
namespace GenericI2CBits {
    export function setBit(value:number, bit:number): number { return value | (1 << bit) }
    export function clearBit(value:number, bit:number): number { return value & ~(1 << bit) }
    export function toggleBit(value:number, bit:number): number { return value ^ (1 << bit) }
    export function readBit(value:number, bit:number): boolean { return ((value >> bit) & 1) == 1 }
    export function writeBit(value:number, bit:number, state:boolean): number {
        return state ? setBit(value, bit) : clearBit(value, bit)
    }
    export function mask(value:number, mask:number): number { return value & mask }
}
