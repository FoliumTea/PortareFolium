import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import TrainingSection from "@/components/resume/TrainingSection";

describe("TrainingSection", () => {
    it("학위 표현 없이 과정명·주최·월 단위 기간을 표시한다", () => {
        const html = renderToStaticMarkup(
            <TrainingSection
                label="교육"
                entries={[
                    {
                        title: "게임 개발자 양성 과정",
                        organizer: "교육 주최사",
                        startMonth: "2026-01",
                        endMonth: "2026-07",
                        jobField: "game",
                    },
                ]}
            />
        );

        expect(html).toContain("게임 개발자 양성 과정");
        expect(html).toContain("교육 주최사");
        expect(html).toContain("2026.01 ~ 2026.07");
        expect(html).not.toContain("GPA");
    });
});
