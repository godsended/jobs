import {Text} from "@mantine/core";
import React from "react";

interface PaymentTextData {
    from?: number | null;
    to?: number | null;
    currency?: string | null;
}

function PaymentText(data: PaymentTextData) {
    let res = "з/п";
    if (data.from === data.to) {
        if (data.from === 0)
            res = "з/п не указана";
        else
            res += " " + data.from + " " + data.currency;
    } else {
        res += data.from ? " от " + data.from : "";
        res += data.to ? " до " + data.to : "";
    }

    return (
        <>
            {res !== "" ?
                <Text inline fw={700}>
                    {res}
                </Text>
                : <></>
            }
        </>
    )
}

export default PaymentText;