enum OpType {
    divide = '/',
    multiply = '*',
    add = '+',
    sub = '-',
    dot = '.'
}

const ops: string[] = [OpType.add, OpType.divide, OpType.dot, OpType.multiply, OpType.sub];

export { OpType, ops };