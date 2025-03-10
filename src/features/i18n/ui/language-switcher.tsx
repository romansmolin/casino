"use client"

import React, { useTransition } from 'react'
import { Button } from "@/shared/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu"
import { SunIcon } from 'lucide-react'
import UkFlag from '@/shared/icons/uk-flag'
import RussiaFlag from '@/shared/icons/russia-flag'
import { useLocale } from 'next-intl'
import { useParams } from 'next/navigation'
import { Locale, usePathname, useRouter } from '@/shared/lib/i18n/routing'

const LanguageSwitcher = () => {
  const locale = useLocale()
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  const changeLocale = (nextLocale: Locale) => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname: '/', params},
        {locale: nextLocale}
      );
    });
  }
  
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" aria-label='Language switcher'>
                {locale === 'en' ? (
                    <UkFlag className="h-[1.5rem] w-[1.5rem] rotate-0 transition-all" />
                ): (
                    <RussiaFlag className="h-[1.5rem] w-[1.5rem] rotate-0 transition-all"/>
                )}
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-46'>
            <DropdownMenuCheckboxItem 
                className='cursor-pointer flex gap-2 p-2' 
                onCheckedChange={() => changeLocale('en')}
            >
                <UkFlag />
                English
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem 
                className='cursor-pointer flex gap-2 p-2'
                onCheckedChange={() => changeLocale('ru')}
            >
                <RussiaFlag />
                Russian
            </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageSwitcher