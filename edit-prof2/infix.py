def infix_to_postfix(expression):
    # تعریف اولویت عملگرها
    precedence = {'+': 1, '-': 1, '*': 2, '/': 2, '^': 3}
    
    # استفاده از یک استک برای ذخیره عملگرها
    stack = []
    
    # ذخیره نتیجه نهایی
    postfix = ''
    
    for char in expression:
        # اگر کاراکتر فعلی یک عدد یا حرف باشد، به نتیجه نهایی اضافه می‌شود
        if char.isalnum():
            postfix += char
        # اگر عملگر بازگشایی پرانتز باشد، در استک قرار می‌گیرد
        elif char == '(':
            stack.append('(')
        # اگر عملگر بستگی پرانتز باشد، عملگرها از استک خارج و به نتیجه نهایی اضافه می‌شوند
        elif char == ')':
            while stack and stack[-1] != '(':
                postfix += stack.pop()
            stack.pop()  # حذف عملگر بازگشایی پرانتز از استک
        # اگر کاراکتر فعلی یک عملگر باشد
        elif char in precedence:
            # عملگرهایی که در استک وجود دارند و اولویت بالاتری دارند باید قبل از آنها از استک خارج شوند
            while stack and stack[-1] != '(' and precedence[char] <= precedence[stack[-1]]:
                postfix += stack.pop()
            stack.append(char)  # افزودن عملگر به استک
    
    # خارج کردن همه عملگرهای باقی‌مانده در استک و اضافه کردن آنها به نتیجه نهایی
    while stack:
        postfix += stack.pop()
    
    return postfix


expression=input("enter")
result = infix_to_postfix(expression)
print(result)  # خروجی: "234+*5-"