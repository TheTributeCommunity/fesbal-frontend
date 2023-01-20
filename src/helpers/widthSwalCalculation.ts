export default (parentWidth: number): string => {
    if (parentWidth < 768) {
        return 'w-1/2';
    } else if (parentWidth < 1024) {
        return 'w-1/4';
    } else {
        return 'w-1/8';
    }
};

