import { Skeleton, Stack } from "@chakra-ui/react";
import cls from "./index.module.scss";

const LoadingCard = (loading: any) => {
  const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  const loadingCard = loading?.loading;
  const newData: any[] = loadingCard ? loadingCard : data;
  return (
    <>
      {newData?.map((_, i) => (
        <article className={cls.item} key={i}>
          <Stack>
            <Skeleton
              height="200px"
              width={"95%"}
              borderRadius={"6px"}
              margin={"0 auto"}
              marginTop={"5px"}
              className={cls.loading_card}
            />
            <Skeleton
              height="20px"
              width={"85%"}
              borderRadius={"6px"}
              marginLeft={"7px"}
              className={cls.loading_card}
            />
            <Skeleton
              height="20px"
              width={"70%"}
              borderRadius={"6px"}
              marginLeft={"7px"}
              marginTop={"5px"}
              className={cls.loading_card}
            />
            <Skeleton
              height="20px"
              width={"60%"}
              borderRadius={"6px"}
              marginLeft={"7px"}
              marginTop={"5px"}
              className={cls.loading_card}
            />
            <Skeleton
              height="45px"
              width={"95%"}
              borderRadius={"6px"}
              margin={"0 auto"}
              marginTop={"20px"}
              marginBottom={"10px"}
              className={cls.loading_card}
            />
          </Stack>
        </article>
      ))}
    </>
  );
};

export default LoadingCard;

export function Category_Left() {
  return (
    <div>
      <Skeleton
        height="20px"
        width={"95%"}
        borderRadius={"6px"}
        marginTop={"15px"}
        className={cls.loading_card}
      />
      <Skeleton
        height="20px"
        width={"80%"}
        borderRadius={"6px"}
        marginTop={"15px"}
        className={cls.loading_card}
      />
      <Skeleton
        height="20px"
        width={"50%"}
        borderRadius={"6px"}
        marginTop={"15px"}
        className={cls.loading_card}
      />
      <Skeleton
        height="20px"
        width={"95%"}
        borderRadius={"6px"}
        marginTop={"15px"}
        className={cls.loading_card}
      />
      <Skeleton
        height="20px"
        width={"80%"}
        borderRadius={"6px"}
        marginTop={"15px"}
        className={cls.loading_card}
      />
      <Skeleton
        height="20px"
        width={"50%"}
        borderRadius={"6px"}
        marginTop={"15px"}
        className={cls.loading_card}
      />
      <Skeleton
        height="20px"
        width={"95%"}
        borderRadius={"6px"}
        marginTop={"15px"}
        className={cls.loading_card}
      />
      <Skeleton
        height="20px"
        width={"80%"}
        borderRadius={"6px"}
        marginTop={"15px"}
        className={cls.loading_card}
      />
      <Skeleton
        height="20px"
        width={"50%"}
        borderRadius={"6px"}
        marginTop={"15px"}
        className={cls.loading_card}
      />
    </div>
  );
}
