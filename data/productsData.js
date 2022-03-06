const products = [
    {
        title: 'C sủi vị cam 1',
        img: '',
        price: 13000,
        unit: 'Tuýp',
        qty: 10000,
        description: 'Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.'
    },
    {
        title: 'C sủi vị cam 2',
        img: '',
        price: 14000,
        unit: 'Tuýp',
        qty: 10000,
        description: 'Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.'
    },
    {
        title: 'C sủi vị cam 3',
        img: '',
        price: 13500,
        unit: 'Tuýp',
        qty: 10000,
        description: 'Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.'
    },
    {
        title: 'C sủi vị chanh 1',
        img: '',
        price: 14000,
        unit: 'Tuýp',
        qty: 10000,
        description: 'Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.'
    },
    {
        title: 'C sủi vị chanh 2',
        img: '',
        price: 13000,
        unit: 'Tuýp',
        qty: 10000,
        description: 'Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.'
    },
    {
        title: 'C sủi vị chanh 3',
        img: '',
        price: 13000,
        unit: 'Tuýp',
        qty: 10000,
        description: 'Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.'
    },
    {
        title: 'C sủi vị chanh 4',
        img: '',
        price: 12000,
        unit: 'Tuýp',
        qty: 10000,
        description: 'Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.'
    },
    {
        title: 'C sủi vị dâu 1',
        img: '',
        price: 13000,
        unit: 'Tuýp',
        qty: 10000,
        description: 'Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.'
    },
    {
        title: 'C sủi vị dâu 2',
        img: '',
        price: 13000,
        unit: 'Tuýp',
        qty: 10000,
        description: 'Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.'
    },
    {
        title: 'C sủi vị dâu 3',
        img: '',
        price: 13000,
        unit: 'Tuýp',
        qty: 10000,
        description: 'Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.'
    },
    {
        title: 'C sủi vị cherry 1',
        img: '',
        price: 12500,
        unit: 'Tuýp',
        qty: 10000,
        description: 'Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.'
    },
    {
        title: 'C sủi vị cherry 2',
        img: '',
        price: 13500,
        unit: 'Tuýp',
        qty: 10000,
        description: 'Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.'
    },
    {
        title: 'C sủi vị cherry 3',
        img: '',
        price: 12500,
        unit: 'Tuýp',
        qty: 10000,
        description: 'Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.'
    },
]

module.exports = products;