const products = [
    // ===== GROCERIES =====
    { name: 'El Arosa Tea', img: 'Products/El_Arosa_Tea.jpeg', category: 'grid-groceries' },
    { name: "Egypt's Best Rice", img: 'Products/Rise_Egyptian.jpeg', category: 'grid-groceries' },

    { name: 'Plain Fava Beans', name_ar: 'فول مدمس سادة', brand: 'California Garden', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Fava Beans and Chickpeas', name_ar: 'فول مدمس و حمص', brand: 'California Garden', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Broad Beans', name_ar: 'باجلا / فول حبة عريضة', brand: 'California Garden', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Fava Beans, Egyptian Spice Mix', name_ar: 'فول بالخلطة المصرية', brand: 'California Garden', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Peeled Fava Beans, Egyptian Spice Mix', name_ar: 'فول مقشور بالخلطة المصرية', brand: 'California Garden', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Peeled Fava Beans, Secret Spice Mix', name_ar: 'فول مقشور بالخلطة السرية', brand: 'California Garden', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Fava Beans with Cumin', name_ar: 'فول مع الكمون', brand: 'California Garden', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Alexandrian Fava Beans with Tahini', name_ar: 'فول إسكندراني بالطحينة', brand: 'California Garden', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Fava Beans with Tahini', name_ar: 'فول بالطحينة', brand: 'California Garden', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Fava Beans with Hot Pepper', name_ar: 'فول مع فلفل حار', brand: 'California Garden', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Chickpeas with Tahini', name_ar: 'حمص بالطحينة', brand: 'California Garden', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Corn Kernels', name_ar: 'حبوب ذرة', brand: 'California Garden', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Saudi Coriander Spice Mix', name_ar: 'خلطة الكشنة السعودية', brand: 'California Garden', img: 'Products/temp.jpg', category: 'grid-groceries' },

    { name: 'White Beans', name_ar: 'فاصوليا بيضاء', brand: 'Americana', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Red Beans', name_ar: 'فاصوليا حمراء', brand: 'Americana', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Boiled Chickpeas', name_ar: 'حمص مسلوق', brand: 'Americana', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Chickpeas with Tahini', name_ar: 'حمص بالطحينة', brand: 'Americana', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Peeled Fava Beans', name_ar: 'فول مدمس مقشور', brand: 'Americana', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Alexandrian Fava Beans with Tahini', name_ar: 'فول إسكندراني بالطحينة', brand: 'Americana', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Fava Beans, Egyptian Spice Mix', name_ar: 'فول بالخلطة المصرية', brand: 'Americana', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Peeled Fava Beans with Hot Pepper', name_ar: 'فول مقشور بالفلفل الحار', brand: 'Americana', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Fava Beans with Olive Oil', name_ar: 'فول بزيت الزيتون', brand: 'Americana', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Fava Beans, Saudi Spice Mix', name_ar: 'فول بالخلطة السعودية', brand: 'Americana', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Plain Fava Beans (Original)', name_ar: 'فول مدمس سادة الطعم الأصلي', brand: 'Americana', img: 'Products/temp.jpg', category: 'grid-groceries' },

    { name: 'Spaghetti', name_ar: 'مكرونة سباغيتي', brand: 'Regina', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Orzo', name_ar: 'لسان عصفور', brand: 'Regina', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Small Ring Pasta', name_ar: 'مرمرية', brand: 'Regina', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Vermicelli', name_ar: 'شعرية', brand: 'Regina', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Oven-Bake Pasta', name_ar: 'مكرونة فرن', brand: 'Regina', img: 'Products/temp.jpg', category: 'grid-groceries' },

    { name: 'Orzo', name_ar: 'لسان عصفور', brand: 'Lamitna', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Ring Pasta', name_ar: 'مكرونة خواتم', brand: 'Lamitna', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Oven-Bake Pasta', name_ar: 'مكرونة فرن', brand: 'Lamitna', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Vermicelli', name_ar: 'شعرية', brand: 'Lamitna', img: 'Products/temp.jpg', category: 'grid-groceries' },

    { name: 'Spaghetti', name_ar: 'مكرونة سباغيتي', brand: 'Hawaa', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Crescent Pasta', name_ar: 'مكرونة هلالية', brand: 'Hawaa', img: 'Products/temp.jpg', category: 'grid-groceries' },

    { name: 'Oven-Bake Pasta', name_ar: 'مكرونة فرن', brand: 'Baraka', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Spaghetti', name_ar: 'مكرونة سباغيتي', brand: 'Baraka', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Elbow Macaroni', name_ar: 'مكرونة كوع', brand: 'Baraka', img: 'Products/temp.jpg', category: 'grid-groceries' },

    { name: 'Elbow Macaroni', name_ar: 'مكرونة كوع', brand: 'Ziyad', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Vermicelli', name_ar: 'شعرية', brand: 'Ziyad', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Rice', name_ar: 'رز', brand: 'Ziyad', img: 'Products/temp.jpg', category: 'grid-groceries' },

    { name: 'Jasmine Rice', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Riceland Jasmine', img: 'Products/temp.jpg', category: 'grid-groceries' },
    { name: 'Premium Egyptian White Rice', img: 'Products/temp.jpg', category: 'grid-groceries' },

    // ===== DRINKS & SNACKS =====
    { name: 'Katakito Wafers', img: 'Products/temp.jpg', category: 'grid-snacks' },
    { name: 'Molto Croissants', img: 'Products/temp.jpg', category: 'grid-snacks' },
    { name: 'Chipsy', img: 'Products/temp.jpg', category: 'grid-snacks' },

    // ===== SMOKE SHOP =====
    { name: 'Cigarettes', img: 'Products/temp.jpg', category: 'grid-smoke' },
    { name: 'Hookah Tobacco', img: 'Products/temp.jpg', category: 'grid-smoke' },
    { name: 'Accessories', img: 'Products/temp.jpg', category: 'grid-smoke' },
];