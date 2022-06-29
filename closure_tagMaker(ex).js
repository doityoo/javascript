// 클로저 활용 하여 태그 생성하기
const tagMaker = tag = content => `<${tag}>${content}<${tag}>`;

const divMaker = tagMaker('div') // 외부 함수 인자
divMaker('Hello') // 내부 함수의 인자
divMaker('Bye') // 내부 함수의 인자

const aMaker = tagMaker('a')
aMaker('go')
aMaker('urclass')