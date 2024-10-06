const Example = () => {
  // オブジェクト指向
  const numObj = {
    nums: [1,2,3],
    sum() {
      const nums = this.nums;
      let sumValue = 0;
      for (let i = 0; i < nums.length; i++) {
        sumValue += nums[i];
      }
      return sumValue;
    }
  }
  // 関数型
  const nums = [1,2,3];
  // const sum = (array) => {
  //   const nums = array;
  //   let sumValue = 0;
  //   // for (let i = 0; i < nums.length; i++) {
  //   //   sumValue += nums[i];
  //   // }
  //   nums.forEach(num => sumValue += num);
  //   return sumValue;
  // }
  const sum = (array) => array.reduce((accu, curr) => accu + curr);
  return (
    <>
      <h3>状態管理と処理を分離</h3>
      <p>オブジェクト指向：{numObj.sum()}</p>
      <p>関数型：{sum(nums)}</p>
    </>
  );
};

export default Example;
