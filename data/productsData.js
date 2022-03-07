const products = [
    {
        title: 'C sủi vị cam 1',
        img: 'https://res.cloudinary.com/dqpnmpeea/image/upload/v1646613129/azofa/MULTI.2.3D.CAM_zimre1.jpg',
        price: 13000,
        unit: 'Tuýp',
        qty: 10000,
        description: 'Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.',
        desDetails: 'THÀNH PHẦN CẤU TẠO \n \
        Vitamin C 240mg \n \
        Vitamin B1 2mg\n \
        Vitamin B2 2mg\n \
        Vitamin B6 2mg\n \
        Vitamin PP 2mg\n \
        Vitamin B9 20mcg\n \
        Cao tía tô 10mg\n \
        Đông trùng hạ thảo 6mg\n \
        Phụ liệu: Natri benzoat, acid citric, glucose, aspartame ,Natri bicacbornat , saccharin, hương hoa quả tổng hợp vừa đủ 2 viên.\n \
        \n \
        CÔNG DỤNG\n \
        Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.\n \ \n \
        HƯỚNG DẪN SỬ DỤNG\n \
        Hòa tan 1 viên trong 200ml nước, sẽ được một ly nước tươi mát có hương vị trái cây, cung cấp đầy đủ vitamin cần thiết cho cơ thể.\n \
        Lưu ý: Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh. Không dùng cho người mẫn cảm với bất kì thành phần nào của sản phẩm.\n \ \n \
        ĐỐI TƯỢNG SỬ DỤNG\n \
        - Người thiếu hụt Vitamin C.\n \
        - Người cần tăng sức đề kháng cho cơ thể.\n \
        - Người mệt mỏi do cảm cúm nhiễm virus, vi khuẩn.\n \
        - Dùng được cho phụ nữ có thai và cho con bú.\n \ \n \
        BẢO QUẢN\n \
        Nơi khô ráo, thoáng mát, tránh ánh sáng trực tiếp.\n \
        Khối lượng tịnh/viên: 4g +/- 7,5%\n \ \n \
        Tiêu chuẩn: TCCS\n \
        Số ĐKSP: \n \
        LSX: \n \
        NSX: \n \
        HSD: \n \ \n \
        Thương nhân chịu trách nhiệm về chất lượng sản phẩm và phân phối bởi:\n \
        CÔNG TY TNHH BICO PHARM\n \
        Địa chỉ: Số 34, phố Lộ Cương, Phường Tứ Minh, Thành phố Hải Dương, tỉnh Hải Dương.\n \
        Điện thoại: 0968.362.866\n \
        Sản xuất và chịu trách nhiệm về chất lượng sản phẩm:\n \
        CÔNG TY TRÁCH NHIỆM HỮU HẠN VITAPHA VIỆT NAM\n \
        Địa chỉ: Đội 5, thôn Dương Tảo, xã Vân Tảo, huyện Thường Tín, thành phố Hà Nội\n \ '
    },
    {
        title: 'C sủi vị cam 2',
        img: 'https://res.cloudinary.com/dqpnmpeea/image/upload/v1646613080/azofa/MULTI.1.3D.CAM_ob0glq.jpg',
        price: 14000,
        unit: 'Tuýp',
        qty: 10000,
        description: 'Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.',
        desDetails: 'THÀNH PHẦN CẤU TẠO \n \
        Vitamin C 240mg \n \
        Vitamin B1 2mg\n \
        Vitamin B2 2mg\n \
        Vitamin B6 2mg\n \
        Vitamin PP 2mg\n \
        Vitamin B9 20mcg\n \
        Cao tía tô 10mg\n \
        Đông trùng hạ thảo 6mg\n \
        Phụ liệu: Natri benzoat, acid citric, glucose, aspartame ,Natri bicacbornat , saccharin, hương hoa quả tổng hợp vừa đủ 2 viên.\n \
        \n \
        CÔNG DỤNG\n \
        Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.\n \ \n \
        HƯỚNG DẪN SỬ DỤNG\n \
        Hòa tan 1 viên trong 200ml nước, sẽ được một ly nước tươi mát có hương vị trái cây, cung cấp đầy đủ vitamin cần thiết cho cơ thể.\n \
        Lưu ý: Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh. Không dùng cho người mẫn cảm với bất kì thành phần nào của sản phẩm.\n \ \n \
        ĐỐI TƯỢNG SỬ DỤNG\n \
        - Người thiếu hụt Vitamin C.\n \
        - Người cần tăng sức đề kháng cho cơ thể.\n \
        - Người mệt mỏi do cảm cúm nhiễm virus, vi khuẩn.\n \
        - Dùng được cho phụ nữ có thai và cho con bú.\n \ \n \
        BẢO QUẢN\n \
        Nơi khô ráo, thoáng mát, tránh ánh sáng trực tiếp.\n \
        Khối lượng tịnh/viên: 4g +/- 7,5%\n \ \n \
        Tiêu chuẩn: TCCS\n \
        Số ĐKSP: \n \
        LSX: \n \
        NSX: \n \
        HSD: \n \ \n \
        Thương nhân chịu trách nhiệm về chất lượng sản phẩm và phân phối bởi:\n \
        CÔNG TY TNHH BICO PHARM\n \
        Địa chỉ: Số 34, phố Lộ Cương, Phường Tứ Minh, Thành phố Hải Dương, tỉnh Hải Dương.\n \
        Điện thoại: 0968.362.866\n \
        Sản xuất và chịu trách nhiệm về chất lượng sản phẩm:\n \
        CÔNG TY TRÁCH NHIỆM HỮU HẠN VITAPHA VIỆT NAM\n \
        Địa chỉ: Đội 5, thôn Dương Tảo, xã Vân Tảo, huyện Thường Tín, thành phố Hà Nội\n \ '
    },
    {
        title: 'C sủi vị việt quất 1',
        img: 'https://res.cloudinary.com/dqpnmpeea/image/upload/v1646613126/azofa/MULTI.2.3D.VIET_QUAT_dwsily.jpg',
        price: 13500,
        unit: 'Tuýp',
        qty: 10000,
        description: 'Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.',
        desDetails: 'THÀNH PHẦN CẤU TẠO \n \
        Vitamin C 240mg \n \
        Vitamin B1 2mg\n \
        Vitamin B2 2mg\n \
        Vitamin B6 2mg\n \
        Vitamin PP 2mg\n \
        Vitamin B9 20mcg\n \
        Cao tía tô 10mg\n \
        Đông trùng hạ thảo 6mg\n \
        Phụ liệu: Natri benzoat, acid citric, glucose, aspartame ,Natri bicacbornat , saccharin, hương hoa quả tổng hợp vừa đủ 2 viên.\n \
        \n \
        CÔNG DỤNG\n \
        Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.\n \ \n \
        HƯỚNG DẪN SỬ DỤNG\n \
        Hòa tan 1 viên trong 200ml nước, sẽ được một ly nước tươi mát có hương vị trái cây, cung cấp đầy đủ vitamin cần thiết cho cơ thể.\n \
        Lưu ý: Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh. Không dùng cho người mẫn cảm với bất kì thành phần nào của sản phẩm.\n \ \n \
        ĐỐI TƯỢNG SỬ DỤNG\n \
        - Người thiếu hụt Vitamin C.\n \
        - Người cần tăng sức đề kháng cho cơ thể.\n \
        - Người mệt mỏi do cảm cúm nhiễm virus, vi khuẩn.\n \
        - Dùng được cho phụ nữ có thai và cho con bú.\n \ \n \
        BẢO QUẢN\n \
        Nơi khô ráo, thoáng mát, tránh ánh sáng trực tiếp.\n \
        Khối lượng tịnh/viên: 4g +/- 7,5%\n \ \n \
        Tiêu chuẩn: TCCS\n \
        Số ĐKSP: \n \
        LSX: \n \
        NSX: \n \
        HSD: \n \ \n \
        Thương nhân chịu trách nhiệm về chất lượng sản phẩm và phân phối bởi:\n \
        CÔNG TY TNHH BICO PHARM\n \
        Địa chỉ: Số 34, phố Lộ Cương, Phường Tứ Minh, Thành phố Hải Dương, tỉnh Hải Dương.\n \
        Điện thoại: 0968.362.866\n \
        Sản xuất và chịu trách nhiệm về chất lượng sản phẩm:\n \
        CÔNG TY TRÁCH NHIỆM HỮU HẠN VITAPHA VIỆT NAM\n \
        Địa chỉ: Đội 5, thôn Dương Tảo, xã Vân Tảo, huyện Thường Tín, thành phố Hà Nội\n \ '
    },
    {
        title: 'C sủi vị việt quất 2',
        img: 'https://res.cloudinary.com/dqpnmpeea/image/upload/v1646613080/azofa/MULTI.1.3D.VIET_QUAT_l3abvo.jpg',
        price: 14000,
        unit: 'Tuýp',
        qty: 10000,
        description: 'Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.',
        desDetails: 'THÀNH PHẦN CẤU TẠO \n \
        Vitamin C 240mg \n \
        Vitamin B1 2mg\n \
        Vitamin B2 2mg\n \
        Vitamin B6 2mg\n \
        Vitamin PP 2mg\n \
        Vitamin B9 20mcg\n \
        Cao tía tô 10mg\n \
        Đông trùng hạ thảo 6mg\n \
        Phụ liệu: Natri benzoat, acid citric, glucose, aspartame ,Natri bicacbornat , saccharin, hương hoa quả tổng hợp vừa đủ 2 viên.\n \
        \n \
        CÔNG DỤNG\n \
        Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.\n \ \n \
        HƯỚNG DẪN SỬ DỤNG\n \
        Hòa tan 1 viên trong 200ml nước, sẽ được một ly nước tươi mát có hương vị trái cây, cung cấp đầy đủ vitamin cần thiết cho cơ thể.\n \
        Lưu ý: Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh. Không dùng cho người mẫn cảm với bất kì thành phần nào của sản phẩm.\n \ \n \
        ĐỐI TƯỢNG SỬ DỤNG\n \
        - Người thiếu hụt Vitamin C.\n \
        - Người cần tăng sức đề kháng cho cơ thể.\n \
        - Người mệt mỏi do cảm cúm nhiễm virus, vi khuẩn.\n \
        - Dùng được cho phụ nữ có thai và cho con bú.\n \ \n \
        BẢO QUẢN\n \
        Nơi khô ráo, thoáng mát, tránh ánh sáng trực tiếp.\n \
        Khối lượng tịnh/viên: 4g +/- 7,5%\n \ \n \
        Tiêu chuẩn: TCCS\n \
        Số ĐKSP: \n \
        LSX: \n \
        NSX: \n \
        HSD: \n \ \n \
        Thương nhân chịu trách nhiệm về chất lượng sản phẩm và phân phối bởi:\n \
        CÔNG TY TNHH BICO PHARM\n \
        Địa chỉ: Số 34, phố Lộ Cương, Phường Tứ Minh, Thành phố Hải Dương, tỉnh Hải Dương.\n \
        Điện thoại: 0968.362.866\n \
        Sản xuất và chịu trách nhiệm về chất lượng sản phẩm:\n \
        CÔNG TY TRÁCH NHIỆM HỮU HẠN VITAPHA VIỆT NAM\n \
        Địa chỉ: Đội 5, thôn Dương Tảo, xã Vân Tảo, huyện Thường Tín, thành phố Hà Nội\n \ '
    },
    {
        title: 'C sủi vị chanh tươi 1',
        img: 'https://res.cloudinary.com/dqpnmpeea/image/upload/v1646613125/azofa/MULTI.2.3D.CHANH_TUOI_cnsflc.jpg',
        price: 13000,
        unit: 'Tuýp',
        qty: 10000,
        description: 'Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.',
        desDetails: 'THÀNH PHẦN CẤU TẠO \n \
        Vitamin C 240mg \n \
        Vitamin B1 2mg\n \
        Vitamin B2 2mg\n \
        Vitamin B6 2mg\n \
        Vitamin PP 2mg\n \
        Vitamin B9 20mcg\n \
        Cao tía tô 10mg\n \
        Đông trùng hạ thảo 6mg\n \
        Phụ liệu: Natri benzoat, acid citric, glucose, aspartame ,Natri bicacbornat , saccharin, hương hoa quả tổng hợp vừa đủ 2 viên.\n \
        \n \
        CÔNG DỤNG\n \
        Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.\n \ \n \
        HƯỚNG DẪN SỬ DỤNG\n \
        Hòa tan 1 viên trong 200ml nước, sẽ được một ly nước tươi mát có hương vị trái cây, cung cấp đầy đủ vitamin cần thiết cho cơ thể.\n \
        Lưu ý: Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh. Không dùng cho người mẫn cảm với bất kì thành phần nào của sản phẩm.\n \ \n \
        ĐỐI TƯỢNG SỬ DỤNG\n \
        - Người thiếu hụt Vitamin C.\n \
        - Người cần tăng sức đề kháng cho cơ thể.\n \
        - Người mệt mỏi do cảm cúm nhiễm virus, vi khuẩn.\n \
        - Dùng được cho phụ nữ có thai và cho con bú.\n \ \n \
        BẢO QUẢN\n \
        Nơi khô ráo, thoáng mát, tránh ánh sáng trực tiếp.\n \
        Khối lượng tịnh/viên: 4g +/- 7,5%\n \ \n \
        Tiêu chuẩn: TCCS\n \
        Số ĐKSP: \n \
        LSX: \n \
        NSX: \n \
        HSD: \n \ \n \
        Thương nhân chịu trách nhiệm về chất lượng sản phẩm và phân phối bởi:\n \
        CÔNG TY TNHH BICO PHARM\n \
        Địa chỉ: Số 34, phố Lộ Cương, Phường Tứ Minh, Thành phố Hải Dương, tỉnh Hải Dương.\n \
        Điện thoại: 0968.362.866\n \
        Sản xuất và chịu trách nhiệm về chất lượng sản phẩm:\n \
        CÔNG TY TRÁCH NHIỆM HỮU HẠN VITAPHA VIỆT NAM\n \
        Địa chỉ: Đội 5, thôn Dương Tảo, xã Vân Tảo, huyện Thường Tín, thành phố Hà Nội\n \ '
    },
    {
        title: 'C sủi vị chanh tươi 2',
        img: 'https://res.cloudinary.com/dqpnmpeea/image/upload/v1646613079/azofa/MULTI.1.3D.CHANH_TUOI_rtctab.jpg',
        price: 13000,
        unit: 'Tuýp',
        qty: 10000,
        description: 'Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.',
        desDetails: 'THÀNH PHẦN CẤU TẠO \n \
        Vitamin C 240mg \n \
        Vitamin B1 2mg\n \
        Vitamin B2 2mg\n \
        Vitamin B6 2mg\n \
        Vitamin PP 2mg\n \
        Vitamin B9 20mcg\n \
        Cao tía tô 10mg\n \
        Đông trùng hạ thảo 6mg\n \
        Phụ liệu: Natri benzoat, acid citric, glucose, aspartame ,Natri bicacbornat , saccharin, hương hoa quả tổng hợp vừa đủ 2 viên.\n \
        \n \
        CÔNG DỤNG\n \
        Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.\n \ \n \
        HƯỚNG DẪN SỬ DỤNG\n \
        Hòa tan 1 viên trong 200ml nước, sẽ được một ly nước tươi mát có hương vị trái cây, cung cấp đầy đủ vitamin cần thiết cho cơ thể.\n \
        Lưu ý: Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh. Không dùng cho người mẫn cảm với bất kì thành phần nào của sản phẩm.\n \ \n \
        ĐỐI TƯỢNG SỬ DỤNG\n \
        - Người thiếu hụt Vitamin C.\n \
        - Người cần tăng sức đề kháng cho cơ thể.\n \
        - Người mệt mỏi do cảm cúm nhiễm virus, vi khuẩn.\n \
        - Dùng được cho phụ nữ có thai và cho con bú.\n \ \n \
        BẢO QUẢN\n \
        Nơi khô ráo, thoáng mát, tránh ánh sáng trực tiếp.\n \
        Khối lượng tịnh/viên: 4g +/- 7,5%\n \ \n \
        Tiêu chuẩn: TCCS\n \
        Số ĐKSP: \n \
        LSX: \n \
        NSX: \n \
        HSD: \n \ \n \
        Thương nhân chịu trách nhiệm về chất lượng sản phẩm và phân phối bởi:\n \
        CÔNG TY TNHH BICO PHARM\n \
        Địa chỉ: Số 34, phố Lộ Cương, Phường Tứ Minh, Thành phố Hải Dương, tỉnh Hải Dương.\n \
        Điện thoại: 0968.362.866\n \
        Sản xuất và chịu trách nhiệm về chất lượng sản phẩm:\n \
        CÔNG TY TRÁCH NHIỆM HỮU HẠN VITAPHA VIỆT NAM\n \
        Địa chỉ: Đội 5, thôn Dương Tảo, xã Vân Tảo, huyện Thường Tín, thành phố Hà Nội\n \ '
    },
    {
        title: 'C sủi vị chanh leo 1',
        img: 'https://res.cloudinary.com/dqpnmpeea/image/upload/v1646613126/azofa/MULTI.2.3D.CHANH_LEO_qxcxn2.jpg',
        price: 12000,
        unit: 'Tuýp',
        qty: 10000,
        description: 'Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.',
        desDetails: 'THÀNH PHẦN CẤU TẠO \n \
        Vitamin C 240mg \n \
        Vitamin B1 2mg\n \
        Vitamin B2 2mg\n \
        Vitamin B6 2mg\n \
        Vitamin PP 2mg\n \
        Vitamin B9 20mcg\n \
        Cao tía tô 10mg\n \
        Đông trùng hạ thảo 6mg\n \
        Phụ liệu: Natri benzoat, acid citric, glucose, aspartame ,Natri bicacbornat , saccharin, hương hoa quả tổng hợp vừa đủ 2 viên.\n \
        \n \
        CÔNG DỤNG\n \
        Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.\n \ \n \
        HƯỚNG DẪN SỬ DỤNG\n \
        Hòa tan 1 viên trong 200ml nước, sẽ được một ly nước tươi mát có hương vị trái cây, cung cấp đầy đủ vitamin cần thiết cho cơ thể.\n \
        Lưu ý: Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh. Không dùng cho người mẫn cảm với bất kì thành phần nào của sản phẩm.\n \ \n \
        ĐỐI TƯỢNG SỬ DỤNG\n \
        - Người thiếu hụt Vitamin C.\n \
        - Người cần tăng sức đề kháng cho cơ thể.\n \
        - Người mệt mỏi do cảm cúm nhiễm virus, vi khuẩn.\n \
        - Dùng được cho phụ nữ có thai và cho con bú.\n \ \n \
        BẢO QUẢN\n \
        Nơi khô ráo, thoáng mát, tránh ánh sáng trực tiếp.\n \
        Khối lượng tịnh/viên: 4g +/- 7,5%\n \ \n \
        Tiêu chuẩn: TCCS\n \
        Số ĐKSP: \n \
        LSX: \n \
        NSX: \n \
        HSD: \n \ \n \
        Thương nhân chịu trách nhiệm về chất lượng sản phẩm và phân phối bởi:\n \
        CÔNG TY TNHH BICO PHARM\n \
        Địa chỉ: Số 34, phố Lộ Cương, Phường Tứ Minh, Thành phố Hải Dương, tỉnh Hải Dương.\n \
        Điện thoại: 0968.362.866\n \
        Sản xuất và chịu trách nhiệm về chất lượng sản phẩm:\n \
        CÔNG TY TRÁCH NHIỆM HỮU HẠN VITAPHA VIỆT NAM\n \
        Địa chỉ: Đội 5, thôn Dương Tảo, xã Vân Tảo, huyện Thường Tín, thành phố Hà Nội\n \ '
    },
    {
        title: 'C sủi vị dâu 1',
        img: 'https://res.cloudinary.com/dqpnmpeea/image/upload/v1646613127/azofa/MULTI.2.3D.DAU_yku6l6.jpg',
        price: 13000,
        unit: 'Tuýp',
        qty: 10000,
        description: 'Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.',
        desDetails: 'THÀNH PHẦN CẤU TẠO \n \
        Vitamin C 240mg \n \
        Vitamin B1 2mg\n \
        Vitamin B2 2mg\n \
        Vitamin B6 2mg\n \
        Vitamin PP 2mg\n \
        Vitamin B9 20mcg\n \
        Cao tía tô 10mg\n \
        Đông trùng hạ thảo 6mg\n \
        Phụ liệu: Natri benzoat, acid citric, glucose, aspartame ,Natri bicacbornat , saccharin, hương hoa quả tổng hợp vừa đủ 2 viên.\n \
        \n \
        CÔNG DỤNG\n \
        Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.\n \ \n \
        HƯỚNG DẪN SỬ DỤNG\n \
        Hòa tan 1 viên trong 200ml nước, sẽ được một ly nước tươi mát có hương vị trái cây, cung cấp đầy đủ vitamin cần thiết cho cơ thể.\n \
        Lưu ý: Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh. Không dùng cho người mẫn cảm với bất kì thành phần nào của sản phẩm.\n \ \n \
        ĐỐI TƯỢNG SỬ DỤNG\n \
        - Người thiếu hụt Vitamin C.\n \
        - Người cần tăng sức đề kháng cho cơ thể.\n \
        - Người mệt mỏi do cảm cúm nhiễm virus, vi khuẩn.\n \
        - Dùng được cho phụ nữ có thai và cho con bú.\n \ \n \
        BẢO QUẢN\n \
        Nơi khô ráo, thoáng mát, tránh ánh sáng trực tiếp.\n \
        Khối lượng tịnh/viên: 4g +/- 7,5%\n \ \n \
        Tiêu chuẩn: TCCS\n \
        Số ĐKSP: \n \
        LSX: \n \
        NSX: \n \
        HSD: \n \ \n \
        Thương nhân chịu trách nhiệm về chất lượng sản phẩm và phân phối bởi:\n \
        CÔNG TY TNHH BICO PHARM\n \
        Địa chỉ: Số 34, phố Lộ Cương, Phường Tứ Minh, Thành phố Hải Dương, tỉnh Hải Dương.\n \
        Điện thoại: 0968.362.866\n \
        Sản xuất và chịu trách nhiệm về chất lượng sản phẩm:\n \
        CÔNG TY TRÁCH NHIỆM HỮU HẠN VITAPHA VIỆT NAM\n \
        Địa chỉ: Đội 5, thôn Dương Tảo, xã Vân Tảo, huyện Thường Tín, thành phố Hà Nội\n \ '
    },
    {
        title: 'C sủi vị dâu 2',
        img: 'https://res.cloudinary.com/dqpnmpeea/image/upload/v1646613088/azofa/MULTI.1.3D.DAU_o5xx0i.jpg',
        price: 13000,
        unit: 'Tuýp',
        qty: 10000,
        description: 'Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.',
        desDetails: 'THÀNH PHẦN CẤU TẠO \n \
        Vitamin C 240mg \n \
        Vitamin B1 2mg\n \
        Vitamin B2 2mg\n \
        Vitamin B6 2mg\n \
        Vitamin PP 2mg\n \
        Vitamin B9 20mcg\n \
        Cao tía tô 10mg\n \
        Đông trùng hạ thảo 6mg\n \
        Phụ liệu: Natri benzoat, acid citric, glucose, aspartame ,Natri bicacbornat , saccharin, hương hoa quả tổng hợp vừa đủ 2 viên.\n \
        \n \
        CÔNG DỤNG\n \
        Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.\n \ \n \
        HƯỚNG DẪN SỬ DỤNG\n \
        Hòa tan 1 viên trong 200ml nước, sẽ được một ly nước tươi mát có hương vị trái cây, cung cấp đầy đủ vitamin cần thiết cho cơ thể.\n \
        Lưu ý: Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh. Không dùng cho người mẫn cảm với bất kì thành phần nào của sản phẩm.\n \ \n \
        ĐỐI TƯỢNG SỬ DỤNG\n \
        - Người thiếu hụt Vitamin C.\n \
        - Người cần tăng sức đề kháng cho cơ thể.\n \
        - Người mệt mỏi do cảm cúm nhiễm virus, vi khuẩn.\n \
        - Dùng được cho phụ nữ có thai và cho con bú.\n \ \n \
        BẢO QUẢN\n \
        Nơi khô ráo, thoáng mát, tránh ánh sáng trực tiếp.\n \
        Khối lượng tịnh/viên: 4g +/- 7,5%\n \ \n \
        Tiêu chuẩn: TCCS\n \
        Số ĐKSP: \n \
        LSX: \n \
        NSX: \n \
        HSD: \n \ \n \
        Thương nhân chịu trách nhiệm về chất lượng sản phẩm và phân phối bởi:\n \
        CÔNG TY TNHH BICO PHARM\n \
        Địa chỉ: Số 34, phố Lộ Cương, Phường Tứ Minh, Thành phố Hải Dương, tỉnh Hải Dương.\n \
        Điện thoại: 0968.362.866\n \
        Sản xuất và chịu trách nhiệm về chất lượng sản phẩm:\n \
        CÔNG TY TRÁCH NHIỆM HỮU HẠN VITAPHA VIỆT NAM\n \
        Địa chỉ: Đội 5, thôn Dương Tảo, xã Vân Tảo, huyện Thường Tín, thành phố Hà Nội\n \ '
    },
    {
        title: 'C sủi vị chanh leo 2',
        img: 'https://res.cloudinary.com/dqpnmpeea/image/upload/v1646613082/azofa/MULTI.1.3D.CHANH_LEO_gsce7m.jpg',
        price: 13000,
        unit: 'Tuýp',
        qty: 10000,
        description: 'Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.',
        desDetails: 'THÀNH PHẦN CẤU TẠO \n \
        Vitamin C 240mg \n \
        Vitamin B1 2mg\n \
        Vitamin B2 2mg\n \
        Vitamin B6 2mg\n \
        Vitamin PP 2mg\n \
        Vitamin B9 20mcg\n \
        Cao tía tô 10mg\n \
        Đông trùng hạ thảo 6mg\n \
        Phụ liệu: Natri benzoat, acid citric, glucose, aspartame ,Natri bicacbornat , saccharin, hương hoa quả tổng hợp vừa đủ 2 viên.\n \
        \n \
        CÔNG DỤNG\n \
        Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.\n \ \n \
        HƯỚNG DẪN SỬ DỤNG\n \
        Hòa tan 1 viên trong 200ml nước, sẽ được một ly nước tươi mát có hương vị trái cây, cung cấp đầy đủ vitamin cần thiết cho cơ thể.\n \
        Lưu ý: Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh. Không dùng cho người mẫn cảm với bất kì thành phần nào của sản phẩm.\n \ \n \
        ĐỐI TƯỢNG SỬ DỤNG\n \
        - Người thiếu hụt Vitamin C.\n \
        - Người cần tăng sức đề kháng cho cơ thể.\n \
        - Người mệt mỏi do cảm cúm nhiễm virus, vi khuẩn.\n \
        - Dùng được cho phụ nữ có thai và cho con bú.\n \ \n \
        BẢO QUẢN\n \
        Nơi khô ráo, thoáng mát, tránh ánh sáng trực tiếp.\n \
        Khối lượng tịnh/viên: 4g +/- 7,5%\n \ \n \
        Tiêu chuẩn: TCCS\n \
        Số ĐKSP: \n \
        LSX: \n \
        NSX: \n \
        HSD: \n \ \n \
        Thương nhân chịu trách nhiệm về chất lượng sản phẩm và phân phối bởi:\n \
        CÔNG TY TNHH BICO PHARM\n \
        Địa chỉ: Số 34, phố Lộ Cương, Phường Tứ Minh, Thành phố Hải Dương, tỉnh Hải Dương.\n \
        Điện thoại: 0968.362.866\n \
        Sản xuất và chịu trách nhiệm về chất lượng sản phẩm:\n \
        CÔNG TY TRÁCH NHIỆM HỮU HẠN VITAPHA VIỆT NAM\n \
        Địa chỉ: Đội 5, thôn Dương Tảo, xã Vân Tảo, huyện Thường Tín, thành phố Hà Nội\n \ '
    },
    {
        title: 'C sủi vị cherry 1',
        img: 'https://res.cloudinary.com/dqpnmpeea/image/upload/v1646613127/azofa/MULTI.2.3D.CHERRY_yipbec.jpg',
        price: 12500,
        unit: 'Tuýp',
        qty: 10000,
        description: 'Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.',
        desDetails: 'THÀNH PHẦN CẤU TẠO \n \
        Vitamin C 240mg \n \
        Vitamin B1 2mg\n \
        Vitamin B2 2mg\n \
        Vitamin B6 2mg\n \
        Vitamin PP 2mg\n \
        Vitamin B9 20mcg\n \
        Cao tía tô 10mg\n \
        Đông trùng hạ thảo 6mg\n \
        Phụ liệu: Natri benzoat, acid citric, glucose, aspartame ,Natri bicacbornat , saccharin, hương hoa quả tổng hợp vừa đủ 2 viên.\n \
        \n \
        CÔNG DỤNG\n \
        Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.\n \ \n \
        HƯỚNG DẪN SỬ DỤNG\n \
        Hòa tan 1 viên trong 200ml nước, sẽ được một ly nước tươi mát có hương vị trái cây, cung cấp đầy đủ vitamin cần thiết cho cơ thể.\n \
        Lưu ý: Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh. Không dùng cho người mẫn cảm với bất kì thành phần nào của sản phẩm.\n \ \n \
        ĐỐI TƯỢNG SỬ DỤNG\n \
        - Người thiếu hụt Vitamin C.\n \
        - Người cần tăng sức đề kháng cho cơ thể.\n \
        - Người mệt mỏi do cảm cúm nhiễm virus, vi khuẩn.\n \
        - Dùng được cho phụ nữ có thai và cho con bú.\n \ \n \
        BẢO QUẢN\n \
        Nơi khô ráo, thoáng mát, tránh ánh sáng trực tiếp.\n \
        Khối lượng tịnh/viên: 4g +/- 7,5%\n \ \n \
        Tiêu chuẩn: TCCS\n \
        Số ĐKSP: \n \
        LSX: \n \
        NSX: \n \
        HSD: \n \ \n \
        Thương nhân chịu trách nhiệm về chất lượng sản phẩm và phân phối bởi:\n \
        CÔNG TY TNHH BICO PHARM\n \
        Địa chỉ: Số 34, phố Lộ Cương, Phường Tứ Minh, Thành phố Hải Dương, tỉnh Hải Dương.\n \
        Điện thoại: 0968.362.866\n \
        Sản xuất và chịu trách nhiệm về chất lượng sản phẩm:\n \
        CÔNG TY TRÁCH NHIỆM HỮU HẠN VITAPHA VIỆT NAM\n \
        Địa chỉ: Đội 5, thôn Dương Tảo, xã Vân Tảo, huyện Thường Tín, thành phố Hà Nội\n \ '
    },
    {
        title: 'C sủi vị cherry 2',
        img: 'https://res.cloudinary.com/dqpnmpeea/image/upload/v1646613079/azofa/MULTI.1.3D.CHERRY_gkp5c8.jpg',
        price: 13500,
        unit: 'Tuýp',
        qty: 10000,
        description: 'Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.',
        desDetails: 'THÀNH PHẦN CẤU TẠO \n \
        Vitamin C 240mg \n \
        Vitamin B1 2mg\n \
        Vitamin B2 2mg\n \
        Vitamin B6 2mg\n \
        Vitamin PP 2mg\n \
        Vitamin B9 20mcg\n \
        Cao tía tô 10mg\n \
        Đông trùng hạ thảo 6mg\n \
        Phụ liệu: Natri benzoat, acid citric, glucose, aspartame ,Natri bicacbornat , saccharin, hương hoa quả tổng hợp vừa đủ 2 viên.\n \
        \n \
        CÔNG DỤNG\n \
        Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.\n \ \n \
        HƯỚNG DẪN SỬ DỤNG\n \
        Hòa tan 1 viên trong 200ml nước, sẽ được một ly nước tươi mát có hương vị trái cây, cung cấp đầy đủ vitamin cần thiết cho cơ thể.\n \
        Lưu ý: Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh. Không dùng cho người mẫn cảm với bất kì thành phần nào của sản phẩm.\n \ \n \
        ĐỐI TƯỢNG SỬ DỤNG\n \
        - Người thiếu hụt Vitamin C.\n \
        - Người cần tăng sức đề kháng cho cơ thể.\n \
        - Người mệt mỏi do cảm cúm nhiễm virus, vi khuẩn.\n \
        - Dùng được cho phụ nữ có thai và cho con bú.\n \ \n \
        BẢO QUẢN\n \
        Nơi khô ráo, thoáng mát, tránh ánh sáng trực tiếp.\n \
        Khối lượng tịnh/viên: 4g +/- 7,5%\n \ \n \
        Tiêu chuẩn: TCCS\n \
        Số ĐKSP: \n \
        LSX: \n \
        NSX: \n \
        HSD: \n \ \n \
        Thương nhân chịu trách nhiệm về chất lượng sản phẩm và phân phối bởi:\n \
        CÔNG TY TNHH BICO PHARM\n \
        Địa chỉ: Số 34, phố Lộ Cương, Phường Tứ Minh, Thành phố Hải Dương, tỉnh Hải Dương.\n \
        Điện thoại: 0968.362.866\n \
        Sản xuất và chịu trách nhiệm về chất lượng sản phẩm:\n \
        CÔNG TY TRÁCH NHIỆM HỮU HẠN VITAPHA VIỆT NAM\n \
        Địa chỉ: Đội 5, thôn Dương Tảo, xã Vân Tảo, huyện Thường Tín, thành phố Hà Nội\n \ '
    },
    {
        title: 'C sủi vị dứa 1',
        img: 'https://res.cloudinary.com/dqpnmpeea/image/upload/v1646613125/azofa/MULTI.2.3D.DUA_gdwmxh.jpg',
        price: 12500,
        unit: 'Tuýp',
        qty: 10000,
        description: 'Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.',
        desDetails: 'THÀNH PHẦN CẤU TẠO \n \
        Vitamin C 240mg \n \
        Vitamin B1 2mg\n \
        Vitamin B2 2mg\n \
        Vitamin B6 2mg\n \
        Vitamin PP 2mg\n \
        Vitamin B9 20mcg\n \
        Cao tía tô 10mg\n \
        Đông trùng hạ thảo 6mg\n \
        Phụ liệu: Natri benzoat, acid citric, glucose, aspartame ,Natri bicacbornat , saccharin, hương hoa quả tổng hợp vừa đủ 2 viên.\n \
        \n \
        CÔNG DỤNG\n \
        Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.\n \ \n \
        HƯỚNG DẪN SỬ DỤNG\n \
        Hòa tan 1 viên trong 200ml nước, sẽ được một ly nước tươi mát có hương vị trái cây, cung cấp đầy đủ vitamin cần thiết cho cơ thể.\n \
        Lưu ý: Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh. Không dùng cho người mẫn cảm với bất kì thành phần nào của sản phẩm.\n \ \n \
        ĐỐI TƯỢNG SỬ DỤNG\n \
        - Người thiếu hụt Vitamin C.\n \
        - Người cần tăng sức đề kháng cho cơ thể.\n \
        - Người mệt mỏi do cảm cúm nhiễm virus, vi khuẩn.\n \
        - Dùng được cho phụ nữ có thai và cho con bú.\n \ \n \
        BẢO QUẢN\n \
        Nơi khô ráo, thoáng mát, tránh ánh sáng trực tiếp.\n \
        Khối lượng tịnh/viên: 4g +/- 7,5%\n \ \n \
        Tiêu chuẩn: TCCS\n \
        Số ĐKSP: \n \
        LSX: \n \
        NSX: \n \
        HSD: \n \ \n \
        Thương nhân chịu trách nhiệm về chất lượng sản phẩm và phân phối bởi:\n \
        CÔNG TY TNHH BICO PHARM\n \
        Địa chỉ: Số 34, phố Lộ Cương, Phường Tứ Minh, Thành phố Hải Dương, tỉnh Hải Dương.\n \
        Điện thoại: 0968.362.866\n \
        Sản xuất và chịu trách nhiệm về chất lượng sản phẩm:\n \
        CÔNG TY TRÁCH NHIỆM HỮU HẠN VITAPHA VIỆT NAM\n \
        Địa chỉ: Đội 5, thôn Dương Tảo, xã Vân Tảo, huyện Thường Tín, thành phố Hà Nội\n \ '
    },
    {
        title: 'C sủi vị dứa 2',
        img: 'https://res.cloudinary.com/dqpnmpeea/image/upload/v1646613079/azofa/MULTI.1.3D.DUA_pn0qcb.jpg',
        price: 12500,
        unit: 'Tuýp',
        qty: 10000,
        description: 'Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.',
        desDetails: 'THÀNH PHẦN CẤU TẠO \n \
        Vitamin C 240mg \n \
        Vitamin B1 2mg\n \
        Vitamin B2 2mg\n \
        Vitamin B6 2mg\n \
        Vitamin PP 2mg\n \
        Vitamin B9 20mcg\n \
        Cao tía tô 10mg\n \
        Đông trùng hạ thảo 6mg\n \
        Phụ liệu: Natri benzoat, acid citric, glucose, aspartame ,Natri bicacbornat , saccharin, hương hoa quả tổng hợp vừa đủ 2 viên.\n \
        \n \
        CÔNG DỤNG\n \
        Thực phẩm bổ sung Pro Multi plusssz giúp bổ sung Vitamin C, hỗ trợ tăng cường sức đề kháng và hỗ trợ giảm các triệu chứng cảm cúm, đau đầu, hắt hơi sổ mũi, đau mỏi cơ thể.\n \ \n \
        HƯỚNG DẪN SỬ DỤNG\n \
        Hòa tan 1 viên trong 200ml nước, sẽ được một ly nước tươi mát có hương vị trái cây, cung cấp đầy đủ vitamin cần thiết cho cơ thể.\n \
        Lưu ý: Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh. Không dùng cho người mẫn cảm với bất kì thành phần nào của sản phẩm.\n \ \n \
        ĐỐI TƯỢNG SỬ DỤNG\n \
        - Người thiếu hụt Vitamin C.\n \
        - Người cần tăng sức đề kháng cho cơ thể.\n \
        - Người mệt mỏi do cảm cúm nhiễm virus, vi khuẩn.\n \
        - Dùng được cho phụ nữ có thai và cho con bú.\n \ \n \
        BẢO QUẢN\n \
        Nơi khô ráo, thoáng mát, tránh ánh sáng trực tiếp.\n \
        Khối lượng tịnh/viên: 4g +/- 7,5%\n \ \n \
        Tiêu chuẩn: TCCS\n \
        Số ĐKSP: \n \
        LSX: \n \
        NSX: \n \
        HSD: \n \ \n \
        Thương nhân chịu trách nhiệm về chất lượng sản phẩm và phân phối bởi:\n \
        CÔNG TY TNHH BICO PHARM\n \
        Địa chỉ: Số 34, phố Lộ Cương, Phường Tứ Minh, Thành phố Hải Dương, tỉnh Hải Dương.\n \
        Điện thoại: 0968.362.866\n \
        Sản xuất và chịu trách nhiệm về chất lượng sản phẩm:\n \
        CÔNG TY TRÁCH NHIỆM HỮU HẠN VITAPHA VIỆT NAM\n \
        Địa chỉ: Đội 5, thôn Dương Tảo, xã Vân Tảo, huyện Thường Tín, thành phố Hà Nội\n \ '
    },
]

module.exports = products;