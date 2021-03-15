import random

with open("sc2 cheese list.txt") as f:
    content = f.readlines()

modified = []
for x in content:
    y = x.strip()
    modified.append(y)
rand = random.randint(0, len(modified))

def main():
    print(modified[rand])
    return modified[rand]

if __name__ == "__main__":
    main()